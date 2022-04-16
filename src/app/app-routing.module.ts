/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule) },
  { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule) },
  { path: 'courses', loadChildren: () => import('./panel/courses/courses/courses.module').then( m => m.CoursesPageModule) },
  { path: 'create-courses', loadChildren: () => import('./panel/courses/create-courses/create-courses.module').then( m => m.CreateCoursesPageModule) },
  { path: 'edit-courses', loadChildren: () => import('./panel/courses/edit-courses/edit-courses.module').then( m => m.EditCoursesPageModule) },
  { path: 'carreras', loadChildren: () => import('./panel/academico/carreras/carreras/carreras.module').then( m => m.CarrerasPageModule) },
  { path: 'create-carrera', loadChildren: () => import('./panel/academico/carreras/create-carreras/create-carreras.module').then( m => m.CreateCarrerasPageModule) },
  { path: 'edit-carreras', loadChildren: () => import('./panel/academico/carreras/edit-carreras/edit-carreras.module').then( m => m.EditCarrerasPageModule) },
  { path: 'admision', loadChildren: () => import('./pages/admision/admision.module').then( m => m.AdmisionPageModule) },
  { path: 'pagos', loadChildren: () => import('./panel/pagos/pagos.module').then( m => m.PagosPageModule) },
  { path: 'herramientas', loadChildren: () => import('./panel/herramientas/herramientas.module').then( m => m.HerramientasPageModule) },
  { path: 'notas', loadChildren: () => import('./panel/notas/notas.module').then( m => m.NotasPageModule) },
  { path: 'horarios', loadChildren: () => import('./panel/horarios/horarios.module').then( m => m.HorariosPageModule) },
  { path: 'teachers', loadChildren: () => import('./panel/teachers/teachers/teachers-routing.module').then( m => m.TeachersPageRoutingModule) },
  { path: 'add-teacher', loadChildren: () => import('./panel/teachers/add-teacher/add-teacher-routing.module').then( m => m.AddTeacherPageRoutingModule) },
  { path: 'students', loadChildren: () => import('./panel/students/students/students.module').then( m => m.StudentsPageModule) },
  { path: 'create-students', loadChildren: () => import('./panel/students/create-students/create-students.module').then( m => m.CreateStudentsPageModule) },
  { path: 'edit-students', loadChildren: () => import('./panel/students/edit-students/edit-students.module').then( m => m.EditStudentsPageModule) },
  { path: 'nomina', loadChildren: () => import('./panel/nomina/nomina/nomina.module').then( m => m.NominaPageModule) },
  { path: 'biblioteca', loadChildren: () => import('./panel/biblioteca/biblioteca/biblioteca.module').then( m => m.BibliotecaPageModule) },
  { path: 'panel-admision', loadChildren: () => import('./panel/panel-admision/panel-admision.module').then( m => m.PanelAdmisionPageModule) },
  { path: 'admision-student', loadChildren: () => import('./panel/admision/admision-studentA/admision-student/admision-student.module').then( m => m.AdmisionStudentPageModule) },
  { path: 'admision-teacher', loadChildren: () => import('./panel/admision/admision-teacher/admision-teacher.module').then( m => m.AdmisionTeacherPageModule) },
  { path: 'gestion-adademica', loadChildren: () => import('./panel/gestion-academica/gestion-academica/gestion-adademica/gestion-adademica.module').then( m => m.GestionAdademicaPageModule) },
  { path: 'gestion-programas', loadChildren: () => import('./panel/gestion-programas/gestion-programas.module').then( m => m.GestionProgramasPageModule) },
  { path: 'examenes-evaluaciones', loadChildren: () => import('./panel/gestion-academica/examenes-evaluaciones/examenes-evaluaciones/examenes-evaluaciones/examenes-evaluaciones.module').then( m => m.ExamenesEvaluacionesPageModule) },
  { path: 'grados-convocatorias', loadChildren: () => import('./panel/gestion-academica/grados-convocatorias/grados-convocatorias/grados-convocatorias.module').then( m => m.GradosConvocatoriasPageModule) },
  { path: 'polizas', loadChildren: () => import('./panel/polizas/polizas.module').then( m => m.PolizasPageModule) },
  { path: 'polizas-seguridad', loadChildren: () => import('./panel/gestion-cumplimiento-polizas/comunicacion-inter-departamentos/polizas-seguridad/polizas-seguridad.module').then( m => m.PolizasSeguridadPageModule) },
  { path: 'registro-universitario', loadChildren: () => import('./panel/registro-universitario/registro-universitario.module').then( m => m.RegistroUniversitarioPageModule) },
  { path: 'recursos-humanos', loadChildren: () => import('./panel/recursos-humanos/recursos-humanos/recursos-humanos.module').then( m => m.RecursosHumanosPageModule) },
  { path: 'nomina-sueldos', loadChildren: () => import('./panel/recursos-humanos/nomina-sueldos/nomina-sueldos.module').then( m => m.NominaSueldosPageModule) },
  { path: 'reclutamiento-docente', loadChildren: () => import('./panel/recursos-humanos/reclutamiento-docente/reclutamiento-docente.module').then( m => m.ReclutamientoDocentePageModule) },
  { path: 'regulaciones', loadChildren: () => import('./panel/finanzas/regulaciones/regulaciones.module').then( m => m.RegulacionesPageModule) },
  { path: 'documentos-electronicos', loadChildren: () => import('./panel/finanzas/documentos-electronicos/documentos-electronicos.module').then( m => m.DocumentosElectronicosPageModule) },
  { path: 'manejo-activos', loadChildren: () => import('./panel/finanzas/manejo-activos/manejo-activos.module').then( m => m.ManejoActivosPageModule) },
  { path: 'presupuesto-financiero', loadChildren: () => import('./panel/finanzas/presupuesto-financiero/presupuesto-financiero.module').then( m => m.PresupuestoFinancieroPageModule) },
  { path: 'vice-rectoria-academica', loadChildren: () => import('./panel/vice-rectoria-academica/vice-rectoria-academica.module').then( m => m.ViceRectoriaAcademicaPageModule) },
  { path: 'vice-rectoria-administrativa', loadChildren: () => import('./panel/vice-rectoria-administrativa/vice-rectoria-administrativa.module').then( m => m.ViceRectoriaAdministrativaPageModule) },
  { path: 'vice-rectoria-post-grado-investigacion', loadChildren: () => import('./panel/vice-rectoria-post-grado-investigacion/vice-rectoria-post-grado-investigacion.module').then( m => m.ViceRectoriaPostGradoInvestigacionPageModule) },
  { path: 'calendario-entretenimiento', loadChildren: () => import('./panel/calendario-entretenimiento/calendario-entretenimiento.module').then( m => m.CalendarioEntretenimientoPageModule) },
  { path: 'asociacion-alumons', loadChildren: () => import('./panel/asociacion-alumons/asociacion-alumons.module').then( m => m.AsociacionAlumonsPageModule) },
  { path: 'equipo-docente', loadChildren: () => import('./panel/equipo-docente/equipo-docente.module').then( m => m.EquipoDocentePageModule) },
  { path: 'records-student', loadChildren: () => import('./panel/admision/records-student/records-student.module').then( m => m.RecordsStudentPageModule) },
  { path: 'services-student', loadChildren: () => import('./panel/services-student/services-student.module').then( m => m.ServicesStudentPageModule) },
  { path: 'pantillas-cartas-memos', loadChildren: () => import('./panel/admision/pantillas-cartas-memos/pantillas-cartas-memos.module').then( m => m.PantillasCartasMemosPageModule) },
  { path: 'revision-app', loadChildren: () => import('./panel/admision/revision-app/revision-app.module').then( m => m.RevisionAppPageModule) },
  { path: 'academia-gestion-programas', loadChildren: () => import('./panel/gestion-academica/academia-gestion-programas/academia-gestion-programas/academia-gestion-programas.module').then( m => m.AcademiaGestionProgramasPageModule) },
  { path: 'academia-gestion-programas-create', loadChildren: () => import('./panel/gestion-academica/academia-gestion-programas/academia-gestion-programas-create/academia-gestion-programas-create.module').then( m => m.AcademiaGestionProgramasCreatePageModule) },
  { path: 'examenes-evaluaciones-create', loadChildren: () => import('./panel/gestion-academica/examenes-evaluaciones/examenes-evaluaciones-create/examenes-evaluaciones-create.module').then( m => m.ExamenesEvaluacionesCreatePageModule) },
  { path: 'gestion-academica-create', loadChildren: () => import('./panel/gestion-academica/gestion-academica/gestion-academica-create/gestion-academica-create.module').then( m => m.GestionAcademicaCreatePageModule) },
  { path: 'grados-convocatorias-create', loadChildren: () => import('./panel/gestion-academica/grados-convocatorias/grados-convocatorias-create/grados-convocatorias-create.module').then( m => m.GradosConvocatoriasCreatePageModule) },
  { path: 'gestion-cumplimiento-polizas', loadChildren: () => import('./panel/gestion-cumplimiento-polizas/gestion-cumplimiento-polizas/gestion-cumplimiento-polizas.module').then( m => m.GestionCumplimientoPolizasPageModule) },
  { path: 'manejo-quejas-create', loadChildren: () => import('./panel/gestion-cumplimiento-polizas/manejo-quejas/manejo-quejas-create/manejo-quejas-create.module').then( m => m.ManejoQuejasCreatePageModule) },
  { path: 'manejo-quejas', loadChildren: () => import('./panel/gestion-cumplimiento-polizas/manejo-quejas/manejo-quejas/manejo-quejas.module').then( m => m.ManejoQuejasPageModule) },
  { path: 'reglamentos-regulaciones-create', loadChildren: () => import('./panel/gestion-cumplimiento-polizas/reglamentos-regulaciones/reglamentos-regulaciones-create/reglamentos-regulaciones-create.module').then( m => m.ReglamentosRegulacionesCreatePageModule) },
  { path: 'reglamentos-regulaciones', loadChildren: () => import('./panel/gestion-cumplimiento-polizas/reglamentos-regulaciones/reglamentos-regulaciones/reglamentos-regulaciones.module').then( m => m.ReglamentosRegulacionesPageModule) },
  { path: 'comunicacion-inter-departamentos', loadChildren: () => import('./panel/gestion-cumplimiento-polizas/comunicacion-inter-departamentos/comunicacion-inter-departamentos/comunicacion-inter-departamentos.module').then( m => m.ComunicacionInterDepartamentosPageModule) },
  { path: 'comunicacion-inter-departamentos-create', loadChildren: () => import('./panel/gestion-cumplimiento-polizas/comunicacion-inter-departamentos/comunicacion-inter-departamentos-create/comunicacion-inter-departamentos-create.module').then( m => m.ComunicacionInterDepartamentosCreatePageModule) },
  { path: 'gestion-cumplimiento-polizas-create', loadChildren: () => import('./panel/gestion-cumplimiento-polizas/gestion-cumplimiento-polizas-create/gestion-cumplimiento-polizas-create.module').then( m => m.GestionCumplimientoPolizasCreatePageModule) },
  { path: 'finanzas-contabilidad', loadChildren: () => import('./panel/finanzas/finanzas-contabilidad/finanzas-contabilidad.module').then( m => m.FinanzasContabilidadPageModule) },
  { path: 'asignatura', loadChildren: () => import('./panel/academico/asignaturas/asignatura/asignatura.module').then( m => m.AsignaturaPageModule) },
  { path: 'create-asignatura', loadChildren: () => import('./panel/academico/asignaturas/create-asignatura/create-asignatura.module').then( m => m.CreateAsignaturaPageModule) },
  { path: 'edit-asignatura', loadChildren: () => import('./panel/academico/asignaturas/edit-asignatura/edit-asignatura.module').then( m => m.EditAsignaturaPageModule) },
  { path: 'academico', loadChildren: () => import('./panel/academico/academico/academico.module').then(m => m.AcademicoPageModule) },
  { path: 'plan-estudios', loadChildren: () => import('./panel/academico/plan-estudios/plan-estudios/plan-estudios.module').then( m => m.PlanEstudiosPageModule) },
  { path: 'create-plan-estudios', loadChildren: () => import('./panel/academico/plan-estudios/create-plan-estudios/create-plan-estudios.module').then( m => m.CreatePlanEstudiosPageModule) },
  { path: 'edit-plan-estudios', loadChildren: () => import('./panel/academico/plan-estudios/edit-plan-estudios/edit-plan-estudios.module').then( m => m.EditPlanEstudiosPageModule) },
  { path: 'ciclo-academico', loadChildren: () => import('./panel/academico/ciclo-academico/ciclo-academico/ciclo-academico.module').then( m => m.CicloAcademicoPageModule) },
  { path: 'create-ciclo-academico', loadChildren: () => import('./panel/academico/ciclo-academico/create-ciclo-academico/create-ciclo-academico.module').then( m => m.CreateCicloAcademicoPageModule) },
  { path: 'edit-ciclo-academico', loadChildren: () => import('./panel/academico/ciclo-academico/edit-ciclo-academico/edit-ciclo-academico.module').then( m => m.EditCicloAcademicoPageModule) },
  { path: 'news', loadChildren: () => import('./panel/noticias/news/news.module').then( m => m.NewsPageModule) },
  { path: 'create-news', loadChildren: () => import('./panel/noticias/create-news/create-news.module').then( m => m.CreateNewsPageModule) },
  { path: 'edit-news', loadChildren: () => import('./panel/noticias/edit-news/edit-news.module').then( m => m.EditNewsPageModule) },
  { path: 'section', loadChildren: () => import('./panel/academico/section/section/section.module').then( m => m.SectionPageModule) },
  { path: 'create-section', loadChildren: () => import('./panel/academico/section/create-section/create-section.module').then( m => m.CreateSectionPageModule) },
  { path: 'edit-section', loadChildren: () => import('./panel/academico/section/edit-section/edit-section.module').then( m => m.EditSectionPageModule) },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
