<?php

namespace App\Http\Controllers;

use App\Models\Faq;
use App\Models\Grievance;

class FaqController extends Controller
{
    public function index(string $query)
    {
        return Faq::whereRelation('module', 'for_institute', '=', auth()->user()->role === 'institute')
            ->where('subject', 'like', "%$query%")->select(['subject', 'solution'])->get();
    }

    public function indexa()
    {
        return Faq::whereRelation('module', 'for_institute', '=', auth()->user()->role === 'institute')
            ->select(['subject', 'solution'])->get();
    }
}
