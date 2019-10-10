<?php

namespace App\Http\Controllers;

use App\Entries;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class EntriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Auth $auth)
    {
        $entries = Entries::orderBy('created_at', 'desc')->with('user')->get();
        $entries_f = $entries->map(function ($item, $key) {
            if ($item->replied_id != null) {
                $item->replied_id = Entries::with('user')->find($item->replied_id);
            }
            return $item;
        });
        return response()
            ->json([
                'result' => true,
                'status_code' => 200,
                'entries' => $entries_f,
            ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $entry = Entries::create([
            'user_id' => $request->get('user_id'),
            'text' => $request->get('text'),
            'replied_id' => $request->get('replied_id'),
        ]);
        $entries = Entries::orderBy('created_at', 'desc')->with('user')->get();
        return response()->json([
            'result' => true,
            'status_code' => 201,
            'entries' => $entries,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Entries  $entries
     * @return \Illuminate\Http\Response
     */
    public function show(Entries $entries)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Entries  $entries
     * @return \Illuminate\Http\Response
     */
    public function edit(Entries $entries)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Entries  $entries
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Entries $entries)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Entries  $entries
     * @return \Illuminate\Http\Response
     */
    public function destroy(Entries $entries)
    {
        //
    }
}