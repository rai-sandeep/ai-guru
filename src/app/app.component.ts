// app.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ApiResponse {
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputValue: string = '';
  wisdomText: string = '';
  isButtonDisabled: boolean = false;
  isGettingWisdom: boolean = false;

  constructor(private http: HttpClient) {}

  submitForm() {
    const url = 'https://jj574jft7k7y7i7dqqai3pe7kq0sfdno.lambda-url.ap-south-1.on.aws';
    const payload = { payload: this.inputValue };

    this.isButtonDisabled = true; // Disable the button
    this.isGettingWisdom = true; // Set flag for "GETTING WISDOM..." button text

    this.http.post<ApiResponse>(url, payload)
      .subscribe(
        response => {
          this.wisdomText = response.text.replace(/\n/g, '<br>');
          this.isButtonDisabled = false; // Re-enable the button
          this.isGettingWisdom = false; // Reset flag for "GET WISDOM" button text
        },
        error => {
          console.error('An error occurred while making the POST request:', error);
          this.isButtonDisabled = false; // Re-enable the button even on error
          this.isGettingWisdom = false; // Reset flag for "GET WISDOM" button text
        }
      );
  }
}
