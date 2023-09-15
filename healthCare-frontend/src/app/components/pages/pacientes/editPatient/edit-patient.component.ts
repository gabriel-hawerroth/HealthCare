import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';

import { Patient } from 'src/app/interfaces/Patient';
import { PatientService } from 'src/app/services/paciente/patient.service';
import { UserService } from 'src/app/services/user/user.service';
import { UtilsService } from 'src/app/utils/utils.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.scss'],
})
export class EditPatientComponent implements OnInit {
  patient?: Patient;

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private userService: UserService,
    private utilsService: UtilsService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    lastValueFrom(
      this.patientService.getPatients(this.userService.getLoggedUserId!)
    ).then((result) => {
      const patients: Patient[] = result;
      const patientsId = patients.map((patient) => patient.id);

      if (!patientsId.includes(id)) {
        this.utilsService.showSimpleMessage('Paciente não encontrado');
        this.router.navigate(['/paciente']);
        return;
      } else {
        lastValueFrom(this.patientService.getById(id)).then((result) => {
          this.patient = result;
        });
      }
    });
  }
}
