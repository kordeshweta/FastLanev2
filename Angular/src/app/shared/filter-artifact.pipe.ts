import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArtifact'
})
export class FilterArtifactPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): unknown {

    if (args.includes(undefined)) {
      console.log('Undefined');
      return value;
    }

    else if ((args[0].selectedPlatform == "" && args[0].selectedFormat == "" && args[0].selectedDomain == "")) {
      console.log('Blank', value);
      return value;
    }

    else if (!(args[0].selectedPlatform == "" && args[0].selectedFormat == "" && args[0].selectedDomain == "")) {
      if (value[0].phaseId) {
        console.log(value, 'Value');
        var result = []
        for (var i = 0; i < value.length; i++) {
          // if (value[0].artefactList[i].platform.toLowerCase() == args[0].selectedPlatform.toLowerCase() 
          //       || value[0].artefactList[i].format.toLowerCase().includes("."+args[0].selectedFormat.toLowerCase())
          //       || value[0].artefactList[i].domain.toLowerCase() == args[0].selectedDomain.toLowerCase()) 

          //single check
          if (args[0].selectedPlatform != "" && args[0].selectedFormat == "" && args[0].selectedDomain == "") {
            if (value[i].platform.toLowerCase().includes(args[0].selectedPlatform.toLowerCase())) {
              result.push(value[i]);
            }
          }

          else if (args[0].selectedPlatform == "" && args[0].selectedFormat != "" && args[0].selectedDomain == "") {
            if (value[i].format.toLowerCase().includes("." + args[0].selectedFormat.toLowerCase())) {
              result.push(value[i]);
            }
          }

          else if (args[0].selectedPlatform == "" && args[0].selectedFormat == "" && args[0].selectedDomain != "") {
            if (value[i].domain.toLowerCase().includes(args[0].selectedDomain.toLowerCase())) {
              result.push(value[i]);
            }
          }


          //double check
          else if (args[0].selectedPlatform != "" && args[0].selectedFormat != "" && args[0].selectedDomain == "") {
            if (value[i].platform.toLowerCase().includes(args[0].selectedPlatform.toLowerCase()) && value[i].format.toLowerCase().includes(args[0].selectedFormat.toLowerCase())) {
              result.push(value[i]);
            }
          }
          else if (args[0].selectedPlatform == "" && args[0].selectedFormat != "" && args[0].selectedDomain != "") {
            if (value[i].format.toLowerCase().includes(args[0].selectedFormat.toLowerCase()) && value[i].domain.toLowerCase().includes(args[0].selectedDomain.toLowerCase())) {
              result.push(value[i]);
            }
          }
          else if (args[0].selectedPlatform != "" && args[0].selectedFormat == "" && args[0].selectedDomain != "") {
            if (value[i].platform.toLowerCase().includes(args[0].selectedPlatform.toLowerCase()) && value[i].domain.toLowerCase().includes(args[0].selectedDomain.toLowerCase())) {
               result.push(value[i]);
            }
          }

          //triple check
          else if (args[0].selectedPlatform != "" && args[0].selectedFormat != "" && args[0].selectedDomain != "") {
            if (value[i].platform.toLowerCase().includes(args[0].selectedPlatform.toLowerCase()) && value[i].format.toLowerCase().includes(args[0].selectedFormat.toLowerCase()) && value[i].domain.toLowerCase().includes(args[0].selectedDomain.toLowerCase())) {
              result.push(value[i]);
            }
          }
        }
        console.log('Inside', result);
        return result;
      }
      else {
        var result = []
        for (var i = 0; i < value.length; i++) {
          //Single check
          if (args[0].selectedPlatform != "" && args[0].selectedFormat == "" && args[0].selectedDomain == "") {
            if (value[i].platform.toLowerCase().includes(args[0].selectedPlatform.toLowerCase())) {
              result.push(value[i]);
            }
          }
          else if (args[0].selectedPlatform == "" && args[0].selectedFormat != "" && args[0].selectedDomain == "") {
            if (value[i].format.toLowerCase().includes(args[0].selectedFormat.toLowerCase())) {
              result.push(value[i]);
            }
          }
          else if (args[0].selectedPlatform == "" && args[0].selectedFormat == "" && args[0].selectedDomain != "") {
            if (value[i].domain.toLowerCase().includes(args[0].selectedDomain.toLowerCase())) {
              result.push(value[i]);
            }
          }
          //Double check
          else if (args[0].selectedPlatform != "" && args[0].selectedFormat != "" && args[0].selectedDomain == "") {
            if (value[i].platform.toLowerCase().includes(args[0].selectedPlatform.toLowerCase()) && value[i].format.toLowerCase().includes(args[0].selectedFormat.toLowerCase())) {
              result.push(value[i]);
            }
          }
          else if (args[0].selectedPlatform == "" && args[0].selectedFormat != "" && args[0].selectedDomain != "") {
            if (value[i].format.toLowerCase().includes(args[0].selectedFormat.toLowerCase()) && value[i].domain.toLowerCase().includes(args[0].selectedDomain.toLowerCase())) {
              result.push(value[i]);
            }
          }
          else if (args[0].selectedPlatform != "" && args[0].selectedFormat == "" && args[0].selectedDomain != "") {
            if (value[i].platform.toLowerCase().includes(args[0].selectedPlatform.toLowerCase()) && value[i].domain.toLowerCase().includes(args[0].selectedDomain.toLowerCase())) {
              result.push(value[i]);
            }
          }
          //Triple check
          else if (args[0].selectedPlatform != "" && args[0].selectedFormat != "" && args[0].selectedDomain != "") {
            if (value[i].platform.toLowerCase().includes(args[0].selectedPlatform.toLowerCase()) && value[i].format.toLowerCase().includes(args[0].selectedFormat.toLowerCase()) && value[i].domain.toLowerCase().includes(args[0].selectedDomain.toLowerCase())) {
              result.push(value[i]);
            }
          }
          // if ( value[i].platform.toLowerCase().includes(args[0].selectedPlatform.toLowerCase()) 
          //       || value[i].format.toLowerCase() == ("."+args[0].selectedFormat.toLowerCase())
          //       || value[i].domain.toLowerCase() == args[0].selectedDomain.toLowerCase()) {
          //     result.push(value[i]);
          // }
        }
        console.log('User', result);
        return result;
      }

    }

  }
}
