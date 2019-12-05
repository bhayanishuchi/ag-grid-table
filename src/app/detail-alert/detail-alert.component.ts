import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AlertService} from '../services/alert.service';
import {NotificationService} from '../services/notification.service';

@Component({
    selector: 'app-detail-alert',
    templateUrl: './detail-alert.component.html',
    styleUrls: ['./detail-alert.component.scss']
})
export class DetailAlertComponent implements OnInit {

    selectedAlert;
    uploadFile;
    commentData;
    detailData: any = {};
    displayCommentModal = 'none';
    CheckInModel = 'none';
    closeModal = 'none';
    AddToCaseModel = 'none';
    display = 'none';
    RouteModal = 'none';
    SuppressModal = 'none';
    showSuccessMsg = false;
    alDetails: any = [];
    selectedRows: any = [];
    columnChooserModes = 'select';
    showFilterRow: boolean;

    constructor(private activateRoute: ActivatedRoute,
                private notificationService: NotificationService,
                private alertService: AlertService) {
    }

    ngOnInit() {
        this.activateRoute.queryParams.subscribe((data) => {
            console.log('data.stack', data.id);
            this.selectedAlert = data.id;
        });
        if (this.selectedAlert !== undefined) {
            this.getDetailAlt(this.selectedAlert);
        }
    }

    getDetailAlt(alertId) {
        this.alertService.getDetailAlert(alertId)
            .subscribe((res) => {
                console.log('detailalert', res);
                console.log('detailalert', res[0].Actions);
                if (res) {
                    this.detailData = res[0];
                    this.alDetails = res[0].alDetails;
                }
            }, error => {
                console.log('error', error);
            })
    }


    openModal() {
        this.display = 'block';
    }

    openCommentModal() {
        this.displayCommentModal = 'block';
    }

    openCloseModal() {
        this.closeModal = 'block';
    }
    openRouteModal() {
        this.RouteModal = 'block';
    }
    openCheckInModel() {
        const data = {
            AlActUser: 'DEMOUSER1',
            AlertId: this.selectedAlert
        };
        const checkInData = [];
        checkInData.push(data)
        this.alertService.getcheckin(checkInData)
            .subscribe((res) => {
                console.log('check in res', res);
                this.showSuccessMsg = true;

                // this.notificationService.showNotification(res, 'success')

            })
    }
    openAddToCaseModel() {
        this.AddToCaseModel = 'block';
    }
    openSuppressModal() {
        this.SuppressModal = 'block';
    }

    uploadFileData() {
        console.log('upload', this.uploadFile);
        const data = {
            file: this.uploadFile,
            ActUser: 'DEMOUSER1'
        };
        this.alertService.uploadFile(this.selectedAlert, data)
            .subscribe((res) => {
                console.log('upload res', res)
                this.showSuccessMsg = true;
            })
    }

    addCommentData() {
        console.log('upload', this.commentData);
        const data = {
            AlActUser: 'DEMOUSER1',
            AlertId: this.selectedAlert,
            CommentTxt: this.commentData
        };
        this.alertService.addAltComment(data)
            .subscribe((res) => {
                console.log('comment res', res);
                this.displayCommentModal = 'none';
                this.getDetailAlt(this.selectedAlert);
            })
    }

    onRouteok() {
        const data = {
            AlActUser: 'DEMOUSER1',
            AlRteUser: 'amladm',
            AlertId: this.selectedAlert
        };
        const routeData = [];
        routeData.push(data)
        this.alertService.putroute(routeData)
            .subscribe((res) => {
                console.log('routeData in res', res);
                this.showSuccessMsg = true;
                this.RouteModal = 'none';

            })
    }

    oncloseok() {
        const data = {
            AlActUser: 'DEMOUSER1',
            AlertId: this.selectedAlert
        };

        const closeData = [];
        closeData.push(data)
        this.alertService.putclose(closeData)
            .subscribe((res) => {
                console.log('closeData in res', res);
                this.showSuccessMsg = true;
                this.closeModal = 'none';

            })

    }
    onSuppressok() {
        const data = {
            ActUser: 'DEMOUSER1',
            AlertId: this.selectedAlert,
            AlActResn: ' ',
            AlSupDate: ' '
        };

        const SuppressData = [];
        SuppressData.push(data)
        this.alertService.putSuppress(SuppressData)
            .subscribe((res) => {
                console.log('SuppressData in res', res);
                this.showSuccessMsg = true;
                this.SuppressModal = 'none';

            })


    }
    onAddToCaseok() {
        const data = {
            CsActUser: 'DEMOUSER1',
            AlertId: this.selectedAlert,
            CaseId: ' ',
        };
        const addtocaseData = [];
        addtocaseData.push(data)
        this.alertService.putaddtocase(addtocaseData)
            .subscribe((res) => {
                console.log('add to case Data in res', res);
                this.showSuccessMsg = true;
                this.AddToCaseModel = 'none';

            })

    }
    onCloseHandled() {
        this.display = 'none';
        this.displayCommentModal = 'none';
        this.CheckInModel = 'none';
        this.closeModal = 'none';
        this.RouteModal = 'none';
        this.AddToCaseModel = 'none';
        this.SuppressModal = 'none';

    }

    selectionChangedHandler() {
        console.log('selectedrow', this.selectedRows);
    }
}
