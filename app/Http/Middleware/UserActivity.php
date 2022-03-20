<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Filesystem\Cache;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserActivity
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if(Auth::check()){
            $expiresAt = now()->addMinutes(2);
            Cache::put('user-is-online-'.auth()->user()->id, true, $expiresAt);
            User::where('id', auth()->user()->id)->update(['last_seen' => now()]);
        }
        return $next($request);
    }
}
