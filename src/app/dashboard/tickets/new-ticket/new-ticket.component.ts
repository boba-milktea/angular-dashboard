import { Component, ElementRef, output, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../ui/button/button.component';
import { ControlComponent } from '../../../ui/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  imports: [ButtonComponent, ControlComponent, FormsModule],
})
export class NewTicketComponent {
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  addTicket = output<{ title: string; text: string }>();

  onSubmit(titleValue: string, textValue: string) {
    this.addTicket.emit({ title: titleValue, text: textValue });
    this.form().nativeElement.reset();
  }
}
