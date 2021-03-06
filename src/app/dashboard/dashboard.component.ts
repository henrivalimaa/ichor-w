import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { ComponentDialogComponent } from '../component-dialog/component-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	displayedColumns = ['name', 'type', 'clients'];
  configColumns = ['name', 'file', 'download'];
  dataSource = new MatTableDataSource<any>(COMPONENT_DATA);
  configurationData = new MatTableDataSource<any>(CONFIG_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
    this.configurationData.filter = filterValue;
  }

  openDialog(component: any): void {
    let dialogRef = this.dialog.open(ComponentDialogComponent, {
      width: '60em',
      data: component
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The component dialog was closed');
    });
  }

  logout(): void {
    this.router.navigate(['login']);
  }
}

const CONFIG_DATA: any[] = [
  { name: 'Docker compose file - Oxygen', file: 'docker-compose.yaml', link: '/assets/resources/docker-compose.yaml'},
  { name: 'Dockerfile - Oxygen client', file: 'Dockerfile', link: '/assets/resources/Dockerfile'},
  { name: 'Dockerfile - Oxygen API ', file: 'Dockerfile', link: '/assets/resources/Dockerfile'}
]

const COMPONENT_DATA: any[] = [
  {
    name: 'Hydrogen', 
    type:'SRM', 
    clients: 'Acryl Ltd, Besill Blockchain', 
    status: 'Under development', 
    versions: [
      { id: '1.0.1', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.2', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.3', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.4', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.5', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '2.0.1', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '2.0.2', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
    ],
    dependencies: [
      { component: 'Oxygen core', version: '1.02'},
      { component: 'Copper', version: '1.02'},
      { component: 'Titanium core', version: '1.05'}
    ],
    description:'Customer relationship management (CRM) is an approach to manage a companys interaction with current and potential customers. It uses data analysis about customers history with a company to improve business relationships with customers, specifically focusing on customer retention and ultimately driving sales growth. One important aspect of the CRM approach is the systems of CRM that compile data from a range of different communication channels, including a companys website, telephone, email, live chat, marketing materials, and more recently, social media. Through the CRM approach and the systems used to facilitate it, businesses learn more about their target audiences and how to best cater to their needs.'
  },
  {
    name: 'Oxygen', 
    type:'SRM', 
    clients: 'Supercell, Makala Solutions Ltd', 
    status: 'Testing', 
    versions: [
      { id: '1.0.1', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.2', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.3', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.4', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.5', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '2.0.1', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '2.0.2', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
    ],
    dependencies: [
      { component: 'Oxygen core', version: '1.02'},
      { component: 'Copper', version: '1.02'},
      { component: 'Titanium core', version: '1.05'}
    ],
    description:'Customer relationship management (CRM) is an approach to manage a companys interaction with current and potential customers. It uses data analysis about customers history with a company to improve business relationships with customers, specifically focusing on customer retention and ultimately driving sales growth. One important aspect of the CRM approach is the systems of CRM that compile data from a range of different communication channels, including a companys website, telephone, email, live chat, marketing materials, and more recently, social media. Through the CRM approach and the systems used to facilitate it, businesses learn more about their target audiences and how to best cater to their needs.'
  },
  {
    name: 'Titanium', 
    type:'ERP', 
    clients: 'Moose corporation, Remedy enterteiment',
    status: 'Production',
    versions: [
      { id: '1.0.1', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.2', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.3', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.4', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.5', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '2.0.1', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '2.0.2', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
    ],
    dependencies: [
      { component: 'Oxygen core', version: '1.02'},
      { component: 'Copper', version: '1.02'},
      { component: 'Titanium core', version: '1.05'}
    ],
    description:'Customer relationship management (CRM) is an approach to manage a companys interaction with current and potential customers. It uses data analysis about customers history with a company to improve business relationships with customers, specifically focusing on customer retention and ultimately driving sales growth. One important aspect of the CRM approach is the systems of CRM that compile data from a range of different communication channels, including a companys website, telephone, email, live chat, marketing materials, and more recently, social media. Through the CRM approach and the systems used to facilitate it, businesses learn more about their target audiences and how to best cater to their needs.'
  },
  {
    name: 'Copper', 
    type:'CRM', 
    clients: 'Apple',
    status: 'Testing',
    versions: [
      { id: '1.0.1', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.2', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.3', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.4', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.5', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '2.0.1', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '2.0.2', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
    ],
    dependencies: [
      { component: 'Oxygen core', version: '1.02'},
      { component: 'Copper', version: '1.02'},
      { component: 'Titanium core', version: '1.05'}
    ],
    description:'Customer relationship management (CRM) is an approach to manage a companys interaction with current and potential customers. It uses data analysis about customers history with a company to improve business relationships with customers, specifically focusing on customer retention and ultimately driving sales growth. One important aspect of the CRM approach is the systems of CRM that compile data from a range of different communication channels, including a companys website, telephone, email, live chat, marketing materials, and more recently, social media. Through the CRM approach and the systems used to facilitate it, businesses learn more about their target audiences and how to best cater to their needs.'
  },
  {
    name: 'Silicon', 
    type:'ERP', 
    clients: 'VC trading INC',
    status: 'Testing', 
    versions: [
      { id: '1.0.1', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.2', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.3', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.4', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.5', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '2.0.1', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '2.0.2', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
    ],
    dependencies: [
      { component: 'Oxygen core', version: '1.02'},
      { component: 'Copper', version: '1.02'},
      { component: 'Titanium core', version: '1.05'}
    ],
    description:'Customer relationship management (CRM) is an approach to manage a companys interaction with current and potential customers. It uses data analysis about customers history with a company to improve business relationships with customers, specifically focusing on customer retention and ultimately driving sales growth. One important aspect of the CRM approach is the systems of CRM that compile data from a range of different communication channels, including a companys website, telephone, email, live chat, marketing materials, and more recently, social media. Through the CRM approach and the systems used to facilitate it, businesses learn more about their target audiences and how to best cater to their needs.'
  },
  {
    name: 'Chromium', 
    type:'SRM', 
    clients: 'Efecte Ltd',
    status: 'Testing',
    versions: [
      { id: '1.0.1', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.2', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.3', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.4', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.5', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '2.0.1', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '2.0.2', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
    ],
    dependencies: [
      { component: 'Oxygen core', version: '1.02'},
      { component: 'Copper', version: '1.02'},
      { component: 'Titanium core', version: '1.05'}
    ],
    description:'Customer relationship management (CRM) is an approach to manage a companys interaction with current and potential customers. It uses data analysis about customers history with a company to improve business relationships with customers, specifically focusing on customer retention and ultimately driving sales growth. One important aspect of the CRM approach is the systems of CRM that compile data from a range of different communication channels, including a companys website, telephone, email, live chat, marketing materials, and more recently, social media. Through the CRM approach and the systems used to facilitate it, businesses learn more about their target audiences and how to best cater to their needs.'
  },
  {
    name: 'Caesium', 
    type:'SCM', 
    clients: 'Fast Cloud Services, Slow Mo Inc',
    status: 'Testing',
    versions: [
      { id: '1.0.1', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.2', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.3', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.4', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.5', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '2.0.1', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '2.0.2', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
    ],
    dependencies: [
      { component: 'Oxygen core', version: '1.02'},
      { component: 'Copper', version: '1.02'},
      { component: 'Titanium core', version: '1.05'}
    ], 
    description:'Customer relationship management (CRM) is an approach to manage a companys interaction with current and potential customers. It uses data analysis about customers history with a company to improve business relationships with customers, specifically focusing on customer retention and ultimately driving sales growth. One important aspect of the CRM approach is the systems of CRM that compile data from a range of different communication channels, including a companys website, telephone, email, live chat, marketing materials, and more recently, social media. Through the CRM approach and the systems used to facilitate it, businesses learn more about their target audiences and how to best cater to their needs.'
  },
  {
    name: 'Barium', 
    type:'CRM', 
    clients: 'Parker Ltd., Monters Inc',
    status: 'Testing',
    versions: [
      { id: '1.0.1', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.2', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.3', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.4', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.5', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '2.0.1', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '2.0.2', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
    ],
    dependencies: [
      { component: 'Oxygen core', version: '1.02'},
      { component: 'Copper', version: '1.02'},
      { component: 'Titanium core', version: '1.05'}
    ],
    description:'Customer relationship management (CRM) is an approach to manage a companys interaction with current and potential customers. It uses data analysis about customers history with a company to improve business relationships with customers, specifically focusing on customer retention and ultimately driving sales growth. One important aspect of the CRM approach is the systems of CRM that compile data from a range of different communication channels, including a companys website, telephone, email, live chat, marketing materials, and more recently, social media. Through the CRM approach and the systems used to facilitate it, businesses learn more about their target audiences and how to best cater to their needs.'
  },
  {
    name: 'Erbium', 
    type:'ERP', 
    clients: 'Cyporg mobile',
    status: 'Testing',
    versions: [
      { id: '1.0.1', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.2', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.3', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.4', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.5', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '2.0.1', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '2.0.2', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
    ],
    dependencies: [
      { component: 'Oxygen core', version: '1.02'},
      { component: 'Copper', version: '1.02'},
      { component: 'Titanium core', version: '1.05'}
    ],
    description:'Customer relationship management (CRM) is an approach to manage a companys interaction with current and potential customers. It uses data analysis about customers history with a company to improve business relationships with customers, specifically focusing on customer retention and ultimately driving sales growth. One important aspect of the CRM approach is the systems of CRM that compile data from a range of different communication channels, including a companys website, telephone, email, live chat, marketing materials, and more recently, social media. Through the CRM approach and the systems used to facilitate it, businesses learn more about their target audiences and how to best cater to their needs.'
  },
  {
    name: 'Iridium', 
    type:'CRM', 
    clients: 'H&E Solutions Ltd.',
    status: 'Testing',
    versions: [
      { id: '1.0.1', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.2', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.3', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.4', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.5', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '2.0.1', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '2.0.2', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
    ],
    dependencies: [
      { component: 'Oxygen core', version: '1.02'},
      { component: 'Copper', version: '1.02'},
      { component: 'Titanium core', version: '1.05'}
    ],
    description:'Customer relationship management (CRM) is an approach to manage a companys interaction with current and potential customers. It uses data analysis about customers history with a company to improve business relationships with customers, specifically focusing on customer retention and ultimately driving sales growth. One important aspect of the CRM approach is the systems of CRM that compile data from a range of different communication channels, including a companys website, telephone, email, live chat, marketing materials, and more recently, social media. Through the CRM approach and the systems used to facilitate it, businesses learn more about their target audiences and how to best cater to their needs.'
  },
  {
    name: 'Neptinium', 
    type:'PLM', 
    clients: 'Marchant',
    status: 'Testing',
    versions: [
      { id: '1.0.1', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.2', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.3', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.4', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.5', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '2.0.1', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '2.0.2', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
    ],
    dependencies: [
      { component: 'Oxygen core', version: '1.02'},
      { component: 'Copper', version: '1.02'},
      { component: 'Titanium core', version: '1.05'}
    ],
    description:'Customer relationship management (CRM) is an approach to manage a companys interaction with current and potential customers. It uses data analysis about customers history with a company to improve business relationships with customers, specifically focusing on customer retention and ultimately driving sales growth. One important aspect of the CRM approach is the systems of CRM that compile data from a range of different communication channels, including a companys website, telephone, email, live chat, marketing materials, and more recently, social media. Through the CRM approach and the systems used to facilitate it, businesses learn more about their target audiences and how to best cater to their needs.'
  },
  {
    name: 'Cur', 
    type:'SRM', 
    clients: 'Gesto Solutions',
    status: 'Testing',
    versions: [
      { id: '1.0.1', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.2', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.3', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.4', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '1.0.5', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '2.0.1', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
      { id: '2.0.2', date: 'Mar 25 2015 02:00:00', url: 'https://github.com/henrivalimaa/ichor-w' },
    ],
    dependencies: [
      { component: 'Oxygen core', version: '1.02'},
      { component: 'Copper', version: '1.02'},
      { component: 'Titanium core', version: '1.05'}
    ],
    description:'Customer relationship management (CRM) is an approach to manage a companys interaction with current and potential customers. It uses data analysis about customers history with a company to improve business relationships with customers, specifically focusing on customer retention and ultimately driving sales growth. One important aspect of the CRM approach is the systems of CRM that compile data from a range of different communication channels, including a companys website, telephone, email, live chat, marketing materials, and more recently, social media. Through the CRM approach and the systems used to facilitate it, businesses learn more about their target audiences and how to best cater to their needs.'
  },
];
