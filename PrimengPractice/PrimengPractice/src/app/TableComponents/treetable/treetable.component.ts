import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../../services/node.service';
import { SharedModule } from '../../sharedModule/shared.module';
interface Column {
  field: string;
  header: string;
}
@Component({
  selector: 'app-treetable',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './treetable.component.html',
  styleUrl: './treetable.component.scss',
})
export class TreetableComponent implements OnInit {
  files!: TreeNode[];

  cols!: Column[];

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
    this.nodeService.getFilesystem().then((files) => (this.files = files));
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' },
    ];
  }
}
