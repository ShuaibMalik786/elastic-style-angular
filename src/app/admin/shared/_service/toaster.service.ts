import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError as observableThrowError, Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";
import { environment } from "./../../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class ToasterService {
  constructor(private toastr: ToastrService) {}

  success(message) {
    this.toastr.success(message, "", {
      timeOut: 2000,
      closeButton: true
    });
  }

  error(message) {
    this.toastr.error(message, "", {
      timeOut: 2000,
      closeButton: true
    });
  }

  warning(message) {
    this.toastr.warning(message, "", {
      timeOut: 2000,
      closeButton: true
    });
  }

  info(message) {
    this.toastr.info(message, "", {
      timeOut: 2000,
      closeButton: true
    });
  }
}
