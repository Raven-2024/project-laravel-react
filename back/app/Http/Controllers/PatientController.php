<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PatientController extends Controller
{
  public function store(Request $request)
  {
    $patient = new Patient;

    $patient->firstname = $request->input('firstname');
    $patient->lastname = $request->input('lastname');
    $patient->age = $request->input('age');
    $patient->gender = $request->input('gender');
    $patient->address = $request->input('address');
    $patient->medicalHistory = $request->input('medicalHistory');

    $patient->save();

    return response()->json([
      'message' => "Added Patient"
    ]);
  }

public function viewPatient($id)
  {
    $patient = Patient::find($id);
    if ($patient) {
      return response()->json([
        'status' => 200,
        'patient' => $patient
      ]);
    }
  }
  public function show()
  {
    $patient = Patient::where("status", 1)->get();
    return response()->json([
      'list_of_patients' => $patient,
      'status' => 200,
      'message' => "Success"
    ]);
  }

  public function edit($id)
  {
    $patient = Patient::find($id);
    if ($patient) {
      return response()->json([
        'status' => 200,
        'patient' => $patient
      ]);
    }
  }

  public function update(Request $request, int $id)
  {

    $patient = Patient::find($id);
    $patient->firstname = $request->input('firstname');
    $patient->lastname = $request->input('lastname');
    $patient->age = $request->input('age');
    $patient->gender = $request->input('gender');
    $patient->address = $request->input('address');
    $patient->medicalHistory = $request->input('medicalHistory');
    $patient->save();
  }

  public function delete($id)
  {
    $patient = Patient::find($id);
    $patient->status = 0;
    $patient->save();
  }
  public function search(Request $request)
  {
    $patient = $request->input('search');

    $result = Patient::where('status', 1)
      ->where(function ($query) use ($patient) {
        $query->where('firstname', 'like', "%{$patient}%")
          ->orWhere('lastname', 'like', "%{$patient}%")
          ->orWhere('age', 'like', "%{$patient}%")
          ->orWhere('address', 'like', "%{$patient}%");
      })->get();

    return response()->json([
      'searchList' => $result,
      'message' => "Search successful"
    ]);
  }
}
