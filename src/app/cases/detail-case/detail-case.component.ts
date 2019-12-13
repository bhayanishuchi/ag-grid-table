import {Component, OnInit} from '@angular/core';
import {Company, Service} from '../../services/data.services';
import {ActivatedRoute, Router} from '@angular/router';
import {CasesService} from '../../services/cases.service';
import {NotificationService} from '../../services/notification.service';

@Component({
    selector: 'app-detail-case',
    templateUrl: './detail-case.component.html',
    styleUrls: ['./detail-case.component.scss']
})
export class DetailCaseComponent implements OnInit {
    selectedCase;
    uploadFile;
    commentData;
    detailData: any = {};
    historyData: any = {};
    closeModal = 'none';
    CheckInModel = 'none';
    locationDtlModel = 'none';
    locationDtlData: any = {};
    empDtlData: any = {};
    empDtlModel = 'none';
    displayCommentModal = 'none';
    display = 'none';
    RouteModal = 'none';
    showSuccessMsg = false;
    alDetails: any = [];
    txnDetails: any = [];
    entDetails: any = [];
    selectedRows: any = [];
    columnChooserModes = 'select';
    showFilterRow: boolean;
    page;
    file;

    constructor(private casesService: CasesService,
                private router: Router,
                private notificationService: NotificationService,
                private activateRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.page = sessionStorage.getItem('page')
        this.activateRoute.queryParams.subscribe((data) => {
            console.log('data.stack', data.id);
            this.selectedCase = data.id;
        });
        if (this.selectedCase !== undefined) {
            this.getDetailAlt(this.selectedCase);
        }
    }

    getDetailAlt(alertId) {
        this.casesService.getdtlCases(alertId)
            .subscribe((res) => {
                console.log('detailalert', res);
                if (res) {
                    this.detailData = res[0];
                    this.historyData = res[0].casov[0];
                    this.alDetails = res[0].altgrid;
                    this.txnDetails = res[0].txngrid;
                    this.entDetails = res[0].entgrid;
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
        const formdata = new FormData();
        formdata.append('file', this.file)
        formdata.append('ActUser', 'DEMOUSER1')
        formdata.append('Content-Type', 'multipart/form-data')
        this.casesService.uploadFile(this.selectedCase, data)
            .subscribe((res) => {
                console.log('upload res', res)
                this.showSuccessMsg = true;
            })
    }

    Fileupload(inputElement: any) {
        const file = inputElement.target.files[0];
        const reader = new FileReader();
        const that = this
        reader.onloadend = function () {
            const block = (reader.result).split(';');
            const contentType = block[0].split(':')[1];
            const realData = block[1].split(',')[1];
            const blob = that.b64toBlob(realData, contentType);
            that.file = blob
            console.log('that.file', that.file)

        }
        reader.readAsDataURL(file);
        console.log('file', file)

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
        let data = {
            CaseId: this.selectedCase,
            CommentTxt: this.commentData,
            CsActUser: 'DEMOUSER1'
        };
        this.casesService.addcomment(data)
            .subscribe((res) => {
                console.log('comment res', res);
                this.displayCommentModal = 'none';
                this.getDetailAlt(this.selectedCase);
            })
    }

    onCloseHandled() {
        this.display = 'none';
        this.displayCommentModal = 'none';
        this.CheckInModel = 'none';
        this.closeModal = 'none';
        this.RouteModal = 'none';
        this.locationDtlModel = 'none';
        this.empDtlModel = 'none';
    }

    selectionChangedHandler() {
        console.log('selectedrow', this.selectedRows);
    }

    openCheckInModel() {
        const data = {
            CsActUser: 'DEMOUSER1',
            CaseId: this.selectedCase
        };
        const checkInData = [];
        checkInData.push(data)
        this.casesService.checkInCases(checkInData)
            .subscribe((res) => {
                console.log('check in res', res);
                this.showSuccessMsg = true;
                this.router.navigate(['/myCases']);
                // this.notificationService.showNotification(res, 'success')

            })
    }

    openCheckOutModel() {
        const data = {
            CsActUser: 'DEMOUSER1',
            CaseId: this.selectedCase
        };
        const checkInData = [];
        checkInData.push(data)
        this.casesService.checkOutCases(checkInData)
            .subscribe((res) => {
                console.log('check in res', res);
                this.showSuccessMsg = true;
                this.router.navigate(['/availCases']);
                // this.notificationService.showNotification(res, 'success')

            })
    }

    openCreateSAR() {
        this.router.navigate(['/sarCases'], {queryParams: {id: this.selectedCase}});
    }

    openCloseModal() {
        this.closeModal = 'block';
    }

    openRouteModal() {
        this.RouteModal = 'block';
    }

    onRouteok() {
        const data = {
            CsActUser: 'DEMOUSER1',
            CaseId: this.selectedCase
        };
        const routeData = [];
        routeData.push(data)
        this.casesService.routeCases(routeData)
            .subscribe((res) => {
                console.log('routeData in res', res);
                this.showSuccessMsg = true;
                this.RouteModal = 'none';
                this.router.navigate(['/myCases']);
            })
    }

    oncloseok() {
        const data = {
            CsActUser: 'DEMOUSER1',
            CaseId: this.selectedCase
        };
        const closeData = [];
        closeData.push(data)
        this.casesService.closeCases(closeData)
            .subscribe((res) => {
                console.log('closeData in res', res);
                this.showSuccessMsg = true;
                this.closeModal = 'none';
                this.router.navigate(['/myCases']);
            })

    }

    onTxnNbrClick(val) {
        this.router.navigate(['/dtlAlerts'], {queryParams: {id: val}});
    }

    onTxnLocClick(data) {
        this.locationDtlData = data.key.TxnLoc;
        this.locationDtlModel = 'block';
    }

    onTxnEmpClick(data) {
        this.empDtlData = data.key.TxnEmp;
        this.empDtlModel = 'block';
    }

    openActiveModel() {
        const data = {
            CsActUser: 'DEMOUSER1',
            CaseId: this.selectedCase
        };
        const checkInData = [];
        checkInData.push(data)
        this.casesService.activateCases(checkInData)
            .subscribe((res) => {
                console.log('check in res', res);
                this.notificationService.showNotification(res.message, 'success')
                this.router.navigate(['/closedCases'], {queryParams: {id: this.selectedCase}});

            })
    }

    okUpload() {
        this.getDetailAlt(this.selectedCase);
        this.display = 'none';
    }

}
