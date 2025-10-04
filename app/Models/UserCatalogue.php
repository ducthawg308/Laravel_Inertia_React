<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserCatalogue extends Model
{
    use SoftDeletes;

    protected $table = 'user_catalogues';

    protected $fillable = [
        'name',
        'canonical',
        'description',
        'user_id',
        'deleted_at',
    ];

    public function creators(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'user_catalogue_user');
    }
}
