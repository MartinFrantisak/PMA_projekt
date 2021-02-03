import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export const btc = "f1ff77b6-3ab4-4719-9ded-2fc7e71cff1f";
export const ada = "7e9d8207-7ec3-4419-b2e1-c626585f14cd";
export const eth = "e991ba77-d384-48ff-b0a4-40e95ef6b7d6";
export const dot = "40524e82-6580-43d3-ae91-c2e9a1734002";

export let currencyMap = new Map([
  [btc, "btc"],
  [ada, "ada"],
  [eth, "eth"],
  [dot, "dot"]
]); 

const authToken = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik5EVXhNRGhHT0VReE56STVOelJCTTBJM1FrUTVOa0l4TWtRd1FrSTJSalJFTVRaR1F6QTBOZyJ9.eyJpc3MiOiJodHRwczovL2F1dGguYnJhdmVuZXdjb2luLmNvbS8iLCJzdWIiOiJvQ2RRb1pvSTk2RVJFOUhZM3NRN0ptYkFDZkJmNTVSWUBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9hcGkuYnJhdmVuZXdjb2luLmNvbSIsImlhdCI6MTYxMjI4NDQ3NiwiZXhwIjoxNjEyMzcwODc2LCJhenAiOiJvQ2RRb1pvSTk2RVJFOUhZM3NRN0ptYkFDZkJmNTVSWSIsInNjb3BlIjoicmVhZDppbmRleC10aWNrZXIgcmVhZDpyYW5raW5nIHJlYWQ6bXdhIHJlYWQ6Z3dhIHJlYWQ6YWdncmVnYXRlcyByZWFkOm1hcmtldCByZWFkOmFzc2V0IHJlYWQ6b2hsY3YgcmVhZDptYXJrZXQtY2FwIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.fW6s6ehenuL7kotl4bjhxtaXTDAcxkI-Bq4b8xt3oWTDz5Mak6bvUtV3q-rsYPjuaJo7vIAf0TcmMjrdPpdltN3ZzM0Cp2FSaQ8BrjIdcoPzWfiOE2FTF8TdTLjzKNRI1kiN9XtLNmq9IOhb22ZpJJ9anBC5RFRPSRqXECg-eHAru4RpZA6kSFncXmlv-Id2Jtz3jq4JL4VAGTjT4nQpmmYn-UWJ-bi8fqMNN6yPBiax5ULVVb1oPHmlkTdJzcFVlHtiTHDcniqv5K_Fu-bN0qAt7LL-2HsmSOGoQE8RuChUGQfrKrRd6fy5xxXUgEyyyeNWHuLKVHtOQtm0LHMu7Q";
const apiUrlCurrency = "https://bravenewcoin.p.rapidapi.com/market-cap?assetId=";
const apiUrlName = "https://bravenewcoin.p.rapidapi.com/asset/";
const apiUrlAsset = "https://bravenewcoin.p.rapidapi.com/asset?status=ACTIVE";
const key = "797c2cd828msh73549a5bf00c47fp149fd4jsn2059b9c9d523";
const host = "bravenewcoin.p.rapidapi.com";

const httpOptions = {
  headers: new HttpHeaders()
  .set('Content-Type', 'application/json;charset=UTF-8')
  .set("authorization", authToken)
  .set("x-rapidapi-key", key)
  .set("x-rapidapi-host", host)
  .set("useQueryString", "true")
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  getDataOfCurrency(currencyName: string): Observable<any>{
    currencyMap.get(currencyName)
    return this.http.get(apiUrlCurrency+currencyName, httpOptions).pipe(
      map(this.extractData));
  }

  getDataOfName(currencyName: string): Observable<any>{
    currencyMap.get(currencyName)
    return this.http.get(apiUrlName+currencyName, httpOptions).pipe(
      map(this.extractData));
  }

  getData(): Observable<any>{
    return this.http.get(apiUrlAsset, httpOptions).pipe(
      map(this.extractData));
  }
  getActualData(idACT): Observable<any>{
    console.log(idACT);
    return this.http.get(apiUrlCurrency+idACT, httpOptions).pipe(
      map(this.extractData)); 
  }
}


