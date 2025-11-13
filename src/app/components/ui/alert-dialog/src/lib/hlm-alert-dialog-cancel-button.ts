import { Directive } from '@angular/core';
import { HlmButton, provideBrnButtonConfig } from '@components/ui/button';

@Directive({
	selector: 'button[hlmAlertDialogCancel]',
	hostDirectives: [{ directive: HlmButton, inputs: ['variant', 'size'] }],
	providers: [provideBrnButtonConfig({ variant: 'outline' })],
})
export class HlmAlertDialogCancelButton {}
