import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverCreated = false;
  serverName = '';
  servers = ['Testserver1', 'Testserver2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! ' + 'Name is: ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }
}
