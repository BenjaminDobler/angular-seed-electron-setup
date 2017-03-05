import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';
import {remote} from 'electron';
import System = SystemJSLoader.System;
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

  newName: string = '';
  errorMessage: string;
  names: any[] = [];

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService) {
    let w:any = window;


    console.log("Node require ", w.nodeRequire);
    console.log("None Node ", w.require);
    console.log("System", System._nodeRequire);
    let udp:any = w.nodeRequire('udp-service-discovery');
    console.log("udp", udp);
  }

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getNames();

  }

  showMessage() {
    remote.dialog.showErrorBox("Hallo", "Check");
  }

  /**
   * Handle the nameListService observable
   */
  getNames() {
    this.nameListService.get()
      .subscribe(
        names => this.names = names,
        error => this.errorMessage = <any>error
      );
  }

  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    // TODO: implement nameListService.post
    this.names.push(this.newName);
    this.newName = '';
    return false;
  }

}
