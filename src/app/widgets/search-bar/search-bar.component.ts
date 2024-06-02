import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  template: `
    <div
      class="flex flex-row items-center w-full bg-white px-6 py-3 rounded-xl gap-2"
    >
      <input
        type="text"
        name=""
        id=""
        class="w-full text-2xl focus-visible: outline-none"
      />
      <svg
        class="icon icon-tabler icons-tabler-outline icon-tabler-search h-8 w-8 text-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
        <path d="M21 21l-6 -6" />
      </svg>
    </div>
  `,
  styles: [],
})
export class SearchBar {
  inputText = new FormControl();
}
