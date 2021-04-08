import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[caipiraDevFor]'
})
export class ForDirective implements OnInit {

  @Input("caipiraDevForEm")
  numbers!: number[]; 

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
    ) { }
  ngOnInit(): void {
    for(let number of this.numbers)  {
      this.container.createEmbeddedView(
        this.template, { $implicit: number});
    }
  }
}
