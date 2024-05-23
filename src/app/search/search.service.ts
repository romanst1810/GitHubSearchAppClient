import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, observable, of, empty } from 'rxjs';
import { map } from "rxjs/operators";
import{Owner} from "../models/owner"
import{RepositoryItem} from "../models/repository-item"
import{SearchResult} from "../models/search-result"

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public baseUrl = "https://api.github.com/search/repositories";
  public searchResults: any;

  constructor(private httpClient: HttpClient) { }


  //makes the HTTP request to get the resources and returns the response as observable;
  public searchEntries(term:any): Observable<any>{
    if (term === "" ){
      console.log("Not defined");
      return of(null);
      //return empty();
    }else{
      let params = {q: term }
      return this.httpClient.get(this.baseUrl, {params}).pipe(
        map(response => {
          console.log(response)
          return this.searchResults = response["items"];
        })
      );
    }

  }

  //returns the response for the first method
  public _searchEntries(term:any){
    return this.searchEntries(term);
  }
}
