<?php
namespace App\Http\Controllers\Backend\V1\User;
use App\Http\Controllers\Backend\BaseController;
use Inertia\Response;
use Inertia\Inertia;

class UserCatalogueController extends BaseController
{
    public function __construct()
    {
        
    }

    public function index(): Response
    {
        return Inertia::render('user.user_catalogue.index');
    }
}