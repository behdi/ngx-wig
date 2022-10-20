import { InjectionToken } from '@angular/core';
import { NgxWigComponent } from './ngx-wig.component';

export type commandFunction = (ctx: NgxWigComponent) => void;

export interface TButton {
  label?: string;
  icon?: string;
  title?: string;
  children?: TButton[];
  command?: string | commandFunction;
  styleClass?: string;
  visibleDropdown?: boolean;
}

export interface TButtonLibrary {
  [name: string]: TButton;
}

export const DEFAULT_LIBRARY_BUTTONS: TButtonLibrary = {
  list1: {
    label: 'UL',
    title: 'Unordered List',
    command: 'insertunorderedlist',
    styleClass: 'nw-list-ul',
    icon: 'nwe-icon-list-ul'
  },
  list2: {
    label: 'OL',
    title: 'Ordered List',
    command: 'insertorderedlist',
    styleClass: 'nw-list-ol',
    icon: 'nwe-icon-list-ol'
  },
  bold: {
    label: 'B',
    title: 'Bold',
    command: 'bold',
    styleClass: 'nw-bold',
    icon: 'nwe-icon-bold'
  },
  italic: {
    label: 'I',
    title: 'Italic',
    command: 'italic',
    styleClass: 'nw-italic',
    icon: 'nwe-icon-italic'
  },
  link: {
    label: 'Link',
    title: 'Link',
    command: 'createlink',
    styleClass: 'nw-link',
    icon: 'nwe-icon-link'
  },
  underline: {
    label: 'U',
    title: 'Underline',
    command: 'underline',
    styleClass: 'nw-format-underlined',
    icon: 'nwe-icon-underline'
  }
};

export const CUSTOM_LIBRARY_BUTTONS: TButtonLibrary = {
  edithtml: {
    label: 'Edit HTML',
    title: 'Edit HTML',
    command: (ctx: NgxWigComponent) => {
      ctx.editMode = !ctx.editMode;
    },
    styleClass: 'nw-button--source',
    icon: '',
  }
};


export const BUTTONS = new InjectionToken<TButton[][]>('BUTTONS');
