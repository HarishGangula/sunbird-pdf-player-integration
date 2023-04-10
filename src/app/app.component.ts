import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'TestApp'; 
  @ViewChild('pdf')
  pdf!: ElementRef;

  ngAfterViewInit() {
    const playerConfig = {"context":{"mode":"play","partner":[],"pdata":{"id":"dev.sunbird.portal","ver":"5.2.0","pid":"sunbird-portal"},"contentId":"do_21374910251798528014586","sid":"6d1898db-d783-4f83-8b92-4a36636e0d2f","uid":"anonymous","timeDiff":-0.089,"channel":"01269878797503692810","tags":["01269878797503692810"],"did":"3ca74a4c5fbce6b7b7f5cd12cebb1682","contextRollup":{"l1":"01269878797503692810"},"objectRollup":{},"userData":{"firstName":"Guest","lastName":""}},"config":{"showEndPage":false,"endPage":[{"template":"assessment","contentType":["SelfAssess"]}],"showStartPage":true,"host":"","overlay":{"showUser":false},"splash":{"text":"","icon":"","bgImage":"assets/icons/splacebackground_1.png","webLink":""},"apislug":"/action","repos":["/sunbird-plugins/renderer"],"plugins":[{"id":"org.sunbird.iframeEvent","ver":1,"type":"plugin"},{"id":"org.sunbird.player.endpage","ver":1.1,"type":"plugin"}],"sideMenu":{"showShare":true,"showDownload":true,"showExit":false}},"metadata":{"copyright":"2009","subject":["Environmental Studies"],"channel":"01345815127107174426","language":["English"],"mimeType":"application/pdf","objectType":"Content","gradeLevel":["Class 3"],"appIcon":"","primaryCategory":"eTextbook","artifactUrl":"https://obj.stage.sunbirded.org/sunbird-content-staging/content/do_21374910251798528014586/artifact/cbse-sample-paper-for-class-1-.pdf","contentType":"eTextBook","identifier":"do_21374910251798528014586","audience":["Student"],"visibility":"Default","author":"Aparna-sri","mediaType":"content","osId":"org.ekstep.quiz.app","languageCode":["en"],"license":"CC BY 4.0","name":"pdf-pdf-pdf-pdf-pdf-pdfpdf-pdf-pdfpdf-pdf-pdfpdf-pdf-pdfpdf-pdf-pdfpdf-pdf-pdfpdf-pdf-pdfpdf-pdf-pdfpdf-pdf-pdfpdf-pdf-p","status":"Live","code":"0534f774-b873-d46d-a46b-bde6a68985dc","interceptionPoints":{},"streamingUrl":"https://obj.stage.sunbirded.org/sunbird-content-staging/content/do_21374910251798528014586/artifact/cbse-sample-paper-for-class-1-.pdf","medium":["English"],"createdOn":"2023-03-13T13:16:54.093+0000","lastUpdatedOn":"2023-03-13T13:17:03.060+0000","originData":{"identifier":"do_21374910251798528014586","repository":"https://dockstaging.sunbirded.org/api/content/v1/read/do_21374910251798528014586"},"creator":"Aparna-sri","pkgVersion":1,"versionKey":"1678713416428","framework":"ekstep_ncert_k-12","createdBy":"703f836a-353b-43f4-83fb-b440e7ee9302","orgDetails":{"email":null,"orgName":"Globe"},"licenseDetails":{"name":"CC BY 4.0","url":"https://creativecommons.org/licenses/by/4.0/legalcode","description":"For details see below:"}},"data":{}};
      const pdfElement = document.createElement('sunbird-pdf-player');
      pdfElement.setAttribute('player-config', JSON.stringify(playerConfig));

      pdfElement.addEventListener('playerEvent', (event) => {
        console.log("On playerEvent", event);
      });

      pdfElement.addEventListener('telemetryEvent', (event) => {
        console.log("On telemetryEvent", event);
      });
      this.pdf.nativeElement.append(pdfElement);
  }
}
