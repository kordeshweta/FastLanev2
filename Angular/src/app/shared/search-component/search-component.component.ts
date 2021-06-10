import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss'],
})
export class SearchComponentComponent implements OnInit {
  searchValue: string;
  @Input() title: any;
  @Input() dataType: any;
  @Output() search = new EventEmitter();
  @Output() searchTextEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() resetData: EventEmitter<string> = new EventEmitter<string>();
  speechToText: string;
  formGroup: FormGroup;
  
  constructor(private cd: ChangeDetectorRef, private formBuilder: FormBuilder) {}
  keyup(event) {
    this.searchValue = event;
    this.search.emit(this.searchValue);
  }
  ngOnInit(): void {
    //console.log('Inside speech-recognition resetUserData()');
    this.dataType = this.dataType
    if ('webkitSpeechRecognition' in window) {
      // speech recognition API supported
      console.log("supported")
    } else {
      console.log("not supported")
      
      // speech recognition API not supported
    }
    this.formGroup = this.formBuilder.group({
      practice: [null]
    })
  }
  voiceSearch(): void {
    //console.log('Inside speech-recognition voiceSearch()');
    this.resetData.emit();
    (<HTMLInputElement>document.getElementById('textToSearch')).value = '';
    (<HTMLImageElement>document.getElementById('image')).src = 'assets/VOICE.gif';
    
    const {webkitSpeechRecognition} = (window as any)
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-UK';
    
    recognition.onresult = (event) => {
      this.speechToText = event.results[0][0].transcript;
      (<HTMLInputElement>document.getElementById('textToSearch')).value = this.speechToText;
      if(this.speechToText){
        this.emitSearchValue();
      }
    }

    recognition.start();

    recognition.onspeechend = function() {
      if(this.speechToText){
        (<HTMLInputElement>document.getElementById('textToSearch')).value = this.speechToText;
      }
      recognition.stop();
      setTimeout(() => {
        (<HTMLInputElement>document.getElementById('textToSearch')).click()
      }, 2000);
    }
    recognition.onaudioend = function() {
      (<HTMLImageElement>document.getElementById('image')).src = 'assets/mic.gif';
    }
  }
  emitSearchValue() : any {
    //console.log('Inside speech-recognition emitSearchValue()');
    this.searchTextEmitter.emit(this.speechToText);
  }
}
