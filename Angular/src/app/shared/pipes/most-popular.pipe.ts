import { Pipe, PipeTransform, PipeTransform } from '@angular/core';

@Pipe({
    name: 'mostPopular'
})
export class MostPopularPipe implements PipeTransform {

    transform(array: Array<string>, arg1: boolean, arg2: boolean, arg3: boolean): Array<string> {
        console.log('is Popular', arg1);
        console.log('last 15', arg2);
        console.log('last 30', arg3);
        if (arg1) {
            array.sort((a: any, b: any) => {
                if (a.likes > b.likes) {
                    return -1;
                } else if (a.likes > b.likes) {
                    return 1;
                } else {
                    return 0;
                }
            });
        }

        if (arg2) {
            const currentDate = new Date();
            const past15 = currentDate.setDate(currentDate.getDate() - 15);
            const start = new Date().toISOString();
            const end = new Date(past15).toISOString();

            return array.filter((item: any) => {
                console.log(start, end);
                return item.createdAt >= end && item.createdAt <= start;
            });
        }

        if (arg3) {
            const currentDate = new Date();
            const past30 = currentDate.setDate(currentDate.getDate() - 30);
            const start = new Date().toISOString();
            const end = new Date(past30).toISOString();

            return array.filter((item: any) => {
                console.log(start, end);
                return item.createdAt >= end && item.createdAt <= start;
            });
        } return array;
    }

}


