import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  takeUntil
} from 'rxjs/operators';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-bar',
  template: `
    <div
      class="flex flex-row items-center w-full bg-white px-6 py-3 rounded-xl gap-2"
    >
      <input
        type="text"
        class="w-full text-2xl focus-visible: outline-none"
        [formControl]="inputText"
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
export class SearchBar implements OnInit, OnDestroy {
  inputText = new FormControl('');
  private readonly destroy$ = new Subject();

  constructor(private router: Router, private searchService: SearchService) {
    this.inputText.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((searchValue) => {
        this.searchService.onChangeSearchText(searchValue, this.router.url);
      });
  }

  ngOnInit() {
    this.router.events.pipe(takeUntil(this.destroy$)).subscribe((event) => {
      if (event instanceof NavigationEnd && this.inputText.value !== '') {
        this.inputText.setValue('');
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
