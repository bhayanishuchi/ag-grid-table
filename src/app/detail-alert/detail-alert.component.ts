import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AlertService} from '../services/alert.service';

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
    display = 'none';
    showSuccessMsg = false;
    alDetails: any = [];
    selectedRows: any = [];
    columnChooserModes = 'select';
    showFilterRow: boolean;

    constructor(private activateRoute: ActivatedRoute,
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

    uploadFileData() {
        console.log('upload', this.uploadFile);
        let data = {
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
        let data = {
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

    onCloseHandled() {
        this.display = 'none';
        this.displayCommentModal = 'none';
    }

    selectionChangedHandler() {
        console.log('selectedrow', this.selectedRows);
    }
}
