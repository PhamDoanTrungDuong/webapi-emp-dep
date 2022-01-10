import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly API_URL = 'http://localhost:63099/api';
  readonly PHOTO_URL = 'http://localhost:63099/Photos';

  constructor(private http: HttpClient) { }
  // Department
  getDepList(): Observable<any[]>{
    return this.http.get<any>(this.API_URL + '/Department')
  }

  addDepList(val: any){
    return this.http.post(this.API_URL + '/Department', val)
  }

  updateDepList(val: any){
    return this.http.put(this.API_URL + '/Department', val)
  }

  deleteDepList(val: any){
    return this.http.delete(this.API_URL + '/Department/'+val);
  }


  //Employee
  getEmp(): Observable<any[]>{
    return this.http.get<any>(this.API_URL + '/Employee')
  }

  addEmp(val: any){
    return this.http.post(this.API_URL + '/Employee', val)
  }

  updateEmp(val: any){
    return this.http.put(this.API_URL + '/Employee', val)
  }

  deleteEmp(val: any){
    return this.http.delete(this.API_URL + '/Employee/', val)
  }

  //Photo
  uploadPhoto(val: any){
    return this.http.post(this.API_URL + '/Employee/SaveFile', val)
  }

  getAllDep(): Observable<any[]>{
    return this.http.get<any>(this.API_URL + '/Employee/GetAllDepartmentNames')
  }

}
