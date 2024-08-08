import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ProductService } from '../services/product.service';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { CustomerService } from '../services/customer.service';

// ----------start  form components---------------- //
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { CountryService } from '../services/country.service';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputSwitchModule } from 'primeng/inputswitch';

import { InputTextareaModule } from 'primeng/inputtextarea';
import { KnobModule } from 'primeng/knob';
import { ToggleButtonModule } from 'primeng/togglebutton';

//----------- end form components ---------------- //
// -----------button----------------------------//
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
// ----------Data ------------------//

import { DataViewModule } from 'primeng/dataview';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { OrderListModule } from 'primeng/orderlist';
import { TimelineModule } from 'primeng/timeline';
import { DragDropModule } from '@angular/cdk/drag-drop'; // Adjust the path as needed
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { NodeService } from '../services/node.service';
// --------------panel
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { StepperModule } from 'primeng/stepper';
import { TabViewModule } from 'primeng/tabview';
import { BadgeModule } from 'primeng/badge';
import { ToolbarModule } from 'primeng/toolbar';
// menu
import { MenubarModule } from 'primeng/menubar';
import { MegaMenuModule } from 'primeng/megamenu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { StepsModule } from 'primeng/steps';
import { TicketService } from '../services/ticket.service';
import { TabMenuModule } from 'primeng/tabmenu';
// Misc
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ChipModule } from 'primeng/chip';
import { InplaceModule } from 'primeng/inplace';
import { MeterGroupModule } from 'primeng/metergroup';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SkeletonModule } from 'primeng/skeleton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TerminalModule } from 'primeng/terminal';
import { TagModule } from 'primeng/tag';

import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
// import { ToastModule } from 'primeng/toast';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    RatingModule,
    TagModule,
    FormsModule,
    ReactiveFormsModule,
    SelectButtonModule,
    TableModule,
    TagModule,
    IconFieldModule,
    InputTextModule,
    InputIconModule,
    MultiSelectModule,
    DropdownModule,
    HttpClientModule,
    TableModule,
    // form component
    AutoCompleteModule,
    CalendarModule,
    CheckboxModule,
    ChipsModule,
    FloatLabelModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputSwitchModule,
    InputTextareaModule,
    KnobModule,
    ToggleButtonModule,
    // button component
    RippleModule,
    SplitButtonModule,
    // Data--------------
    DataViewModule,
    PaginatorModule,
    PanelModule,
    ToastModule,
    ConfirmDialogModule,
    OrderListModule,
    TimelineModule,
    DragDropModule,
    TreeModule,
    TreeTableModule,
    // Panel ---------------
    AccordionModule,
    CardModule,
    AvatarModule,
    MenuModule,
    StepperModule,
    TabViewModule,
    BadgeModule,
    ToolbarModule,
    // menu
    MenubarModule,
    MegaMenuModule,
    BreadcrumbModule,
    StepsModule,
    TabMenuModule,
    // misc
    AvatarGroupModule,

    ChipModule,
    MeterGroupModule,
    ScrollTopModule,
    SkeletonModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    TerminalModule,
    InplaceModule,
  ],
  exports: [
    CommonModule,
    TableModule,
    ButtonModule,
    RatingModule,
    TagModule,
    FormsModule,
    ReactiveFormsModule,
    SelectButtonModule,
    TableModule,
    TagModule,
    IconFieldModule,
    InputTextModule,
    InputIconModule,
    MultiSelectModule,
    DropdownModule,
    HttpClientModule,
    TableModule,

    // form component
    AutoCompleteModule,
    CalendarModule,
    CheckboxModule,
    ChipsModule,
    FloatLabelModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputSwitchModule,
    InputTextareaModule,
    KnobModule,
    ToggleButtonModule,
    // button component
    RippleModule,
    SplitButtonModule,
    // Data--------------
    DataViewModule,
    PaginatorModule,
    PanelModule,
    ToastModule,
    ConfirmDialogModule,
    OrderListModule,
    TimelineModule,
    DragDropModule,
    TreeModule,
    TreeTableModule,
    // panel------------
    AccordionModule,
    CardModule,
    AvatarModule,
    MenuModule,
    StepperModule,
    TabViewModule,
    BadgeModule,
    ToolbarModule,
    // menu
    MenubarModule,
    MegaMenuModule,
    BreadcrumbModule,
    TabMenuModule,
    StepsModule,
    // misc
    AvatarGroupModule,
    ChipModule,
    MeterGroupModule,
    ScrollTopModule,
    SkeletonModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    TerminalModule,
    InplaceModule,
  ],
  providers: [
    ProductService,
    CustomerService,
    CountryService,
    NodeService,
    TicketService,
  ],
})
export class SharedModule {}
