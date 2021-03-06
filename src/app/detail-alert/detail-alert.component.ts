import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AlertService} from '../services/alert.service';
import {NotificationService} from '../services/notification.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-detail-alert',
    templateUrl: './detail-alert.component.html',
    styleUrls: ['./detail-alert.component.scss']
})
export class DetailAlertComponent implements OnInit {
    selectedCase;
    selectedAlert;
    uploadFile;
    commentData;
    selectedUserId;
    selectUserId = [];
    detailData: any = {};
    displayCommentModal = 'none';
    CheckInModel = 'none';
    closeModal = 'none';
    AddToCaseModel = 'none';
    AddToNewCaseModel = 'none';
    display = 'none';
    RouteModal = 'none';
    SuppressModal = 'none';
    showSuccessMsg = false;
    alDetails: any = [];
    selectedRows: any = [];
    columnChooserModes = 'select';
    showFilterRow: boolean;
    selectloves: any = {};
    AlertSupRsns;
    Suppress_Until;
    binaryBlob;
    Case_Rsns;
    Case_Types;
    selectMycase;
    case_id;
    page;
    file;

    constructor(private activateRoute: ActivatedRoute,
                private router: Router,
                private notificationService: NotificationService,
                private alertService: AlertService) {
    }





    ngOnInit() {
        this.page = sessionStorage.getItem('page')
        console.log('hudhuh', this.page)
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

    getloves() {
        this.alertService.getlovs()
            .subscribe((res) => {
                this.selectloves = res.lovs[0];
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
        this.getloves()
    }
    openRouteModal() {
        this.RouteModal = 'block';
        this.alertService.getusers()
            .subscribe((res) => {
                console.log('res', res);
                this.selectUserId = res
            }, error => {
                console.log('error', error);
            })

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
                this.notificationService.showNotification(res.message, 'success')

                this.router.navigate(['/myAlerts'], {queryParams: {id: this.selectedAlert}});

            })
    }
    openCheckoutModel() {
        const data = {
            AlActUser: 'DEMOUSER1',
            AlertId: this.selectedAlert
        };
        const checkoutData = [];
        checkoutData.push(data)
        this.alertService.getcheckout(checkoutData)
            .subscribe((res) => {
                console.log('check in res', res);
                this.notificationService.showNotification(res.message, 'success')

                this.router.navigate(['/myAlerts'], {queryParams: {id: this.selectedAlert}});

            })
    }
    openAddToCaseModel() {
        this.AddToCaseModel = 'block';
        const caseid = 'DEMOUSER1';

        this.alertService.getmycase(caseid)
            .subscribe((res) => {
                console.log('caseid  res', res);
                this.selectMycase = res;
            }, error => {
                console.log('error', error);
            })
   }

    openActiveModel() {
        const data = {
            AlertId: this.selectedAlert
        };
        const checkInData = [];
        checkInData.push(data)
        this.alertService.getActive(checkInData)
            .subscribe((res) => {
                console.log('check in res', res);
                this.notificationService.showNotification(res.message, 'success')
                this.router.navigate(['/myAlerts'], {queryParams: {id: this.selectedAlert}});

            })
    }
    openAddToNewCaseModel() {
        this.AddToCaseModel = 'none';
        this.AddToNewCaseModel = 'block';
        this.getloves()

    }
    cancelAddToNewCaseModel() {
        this.AddToNewCaseModel = 'none';
        this.AddToCaseModel = 'block';

    }
    openSuppressModal() {
        this.SuppressModal = 'block';
        this.getloves()

    }

    uploadFileData() {
        console.log('upload', this.uploadFile, this.file);
        const data = {
            file: this.uploadFile,
            ActUser: 'DEMOUSER1'
        };
        const formdata = new FormData();
        formdata.append('file', (this.file))
        formdata.append('ActUser', 'DEMOUSER1')
        formdata.append('Content-Type', 'multipart/form-data')
        this.alertService.uploadFile(this.selectedAlert, formdata)
            .subscribe((res) => {
                console.log('upload res', res)
                this.showSuccessMsg = true;

            })
        }

    Fileupload(inputElement: any) {
        const file = inputElement.target.files[0];
        const reader = new FileReader();
            const that = this
            reader.onloadend = function() {
                const block = (reader.result).split(';');
                const contentType = block[0].split(':')[1];
                const realData = block[1].split(',')[1];
                const blob = that.b64toBlob(realData, contentType);
                that.file = blob
            }
            reader.readAsDataURL(file);

    }

    b64toBlob(b64Data, contentType) {
        contentType = contentType || '';
        const sliceSize = 512;

        const byteCharacters = atob(b64Data);
        const byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);

            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

        const blob = new Blob(byteArrays, {type: contentType});
        return blob;
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
                this.notificationService.showNotification(res.message, 'success')

            })
    }
    onRouteok() {
        const data = {
            AlActUser: 'DEMOUSER1',
            AlRteUser: this.selectedUserId,
            AlertId: this.selectedAlert
        };
        const routeData = [];
        routeData.push(data)
        this.alertService.putroute(routeData)
            .subscribe((res) => {
                console.log('routeData in res', res);
                this.notificationService.showNotification(res.message, 'success')
                this.router.navigate(['/myAlerts'], {queryParams: {id: this.selectedAlert}});

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
                this.notificationService.showNotification(res.message, 'success')
                this.router.navigate(['/myAlerts'], {queryParams: {id: this.selectedAlert}});

            })

    }
    onSuppressok() {
        const data = {
            ActUser: 'DEMOUSER1',
            AlertId: this.selectedAlert,
            AlActResn: this.AlertSupRsns,
            AlSupDate: this.Suppress_Until,
        };

        const SuppressData = [];
        SuppressData.push(data)
        this.alertService.putSuppress(SuppressData)
            .subscribe((res) => {
                console.log('SuppressData in res', res);
                this.notificationService.showNotification(res.message, 'success')
                this.router.navigate(['/myAlerts'], {queryParams: {id: this.selectedAlert}});

            })


    }
    onAddToCaseok() {
        const caseId = this.case_id
        const data = {
            CsActUser: 'DEMOUSER1',
            CaseId: this.case_id,
            AlertId: this.selectedAlert,
        };
        console.log('caseid data', data)
        const addtocaseData = [];
        addtocaseData.push(data)
        this.alertService.putaddtocase(caseId, addtocaseData)
            .subscribe((res) => {
                console.log('add to case Data in res', res);
                 this.notificationService.showNotification(res.message, 'success')
                this.router.navigate(['/myAlerts'], {queryParams: {id: this.selectedAlert}});

            })

    }
    onAddToNewCaseok() {
        const data = {
            AlertId: this.selectedAlert,
            CaseRsn: this.Case_Rsns,
            CaseType: this.Case_Types,
            CsActUser: 'DEMOUSER1'
        };

        const addtonewcaseData = [];
        addtonewcaseData.push(data)
        this.alertService.putaddtoNewcase(addtonewcaseData)
            .subscribe((res) => {
                console.log('add to new caseData in res', res);
                this.notificationService.showNotification(res.message, 'success')
                this.router.navigate(['/myAlerts'], {queryParams: {id: this.selectedAlert}});

            })


    }

    okUpload() {
        this.getDetailAlt(this.selectedAlert)
        this.display = 'none';
    }

    onCloseHandled() {
        this.display = 'none';
        this.displayCommentModal = 'none';
        this.CheckInModel = 'none';
        this.closeModal = 'none';
        this.RouteModal = 'none';
        this.AddToCaseModel = 'none';
        this.SuppressModal = 'none';
        this.AddToNewCaseModel = 'none';

    }

    selectionChangedHandler() {
        console.log('selectedrow', this.selectedRows);
    }
}
