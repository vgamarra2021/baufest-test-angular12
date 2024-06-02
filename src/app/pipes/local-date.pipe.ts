import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment-timezone';

@Pipe({
  name: 'localDate',
})
export class LocalDatePipe implements PipeTransform {
  transform(value: string, timezone: string = moment.tz.guess()): string {
    if (!value) return '';

    // Convert the ISO string to a local date in the specified timezone
    const localDate = moment.tz(value, timezone);

    // Format the local date to a readable format (customize as needed)
    return localDate.format('YYYY-MM-DD HH:mm:ss');
  }
}
