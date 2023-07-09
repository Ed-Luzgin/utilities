import { EventEmitter } from '@angular/core';

export class MainPageService {
    caseId: string;

    clickCase = new EventEmitter<string>();

    onClickCase(caseId) {
        this.caseId = caseId;
    }
}