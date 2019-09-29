import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { PetAddComponent } from './_models/pet/pet-add.component';
import { UserEditComponent } from './_models/user/user-edit.component';
import { PetEditComponent } from './_models/pet/pet-edit.component';
import { LostPetComponent } from './lostPet/lostPet.component';
import { AdoptablePetsComponent } from './adoptablePets/adoptablePets.component';
import { AdminComponent } from './admin/admin.component';
import { PetDetailComponent } from './_models/pet/pet-detail.component';
import { RegisterComponent } from './register/register.component';
import { UserAdminComponent } from './admin/users/user-admin.component';
import { PetAdminComponent } from './admin/pets/pet-admin.component';
import { SpecieAdminComponent } from './admin/species/specie-admin.component';
import { BreedAdminComponent } from './admin/breeds/breed-admin.component';
import { IndexComponent } from './index/index.component';



const appRoutes: Routes = [
    {
        path: '',
        component: IndexComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'pet-add',
        component: PetAddComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'user-edit',
        component: UserEditComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { role: 'ROLE_ADMIN' }
    },
    {
        path: 'app-admin-user',
        component: UserAdminComponent,
        canActivate: [AuthGuard],
        data: { role: 'ROLE_ADMIN' }
    },
    {
        path: 'app-admin-pet',
        component: PetAdminComponent,
        canActivate: [AuthGuard],
        data: { role: 'ROLE_ADMIN' }
    },
    {
        path: 'app-admin-Breed',
        component: BreedAdminComponent,
        canActivate: [AuthGuard],
        data: { role: 'ROLE_ADMIN' }
    },
    {
        path: 'app-admin-specie',
        component: SpecieAdminComponent,
        canActivate: [AuthGuard],
        data: { role: 'ROLE_ADMIN' }
    },
    {
        path: 'pet-edit',
        component: PetEditComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'pet-detail',
        component: PetDetailComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'lost-pets',
        component: LostPetComponent
    },
    {
        path: 'adoptable-pets',
        component: AdoptablePetsComponent
    },

    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);