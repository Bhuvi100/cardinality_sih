<?php

namespace App\Http\Controllers;

use App\Models\Grievance;

class FaqController extends Controller
{
    public function index(string $query)
    {
        return Grievance::where('subject', 'like', "$query%")->select(['subject', 'description'])->get();
    }

    public function indexa()
    {
        return Grievance::select(['subject', 'description'])->get();
    }
}
