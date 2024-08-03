import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../../services/node.service';

@Component({
  selector: 'app-treetable',
  standalone: true,
  imports: [],
  templateUrl: './treetable.component.html',
  styleUrl: './treetable.component.scss',
})
export class TreetableComponent implements OnInit {
  files!: TreeNode[];

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
    this.nodeService.getFilesystem().then((files) => (this.files = files));
  }
}
