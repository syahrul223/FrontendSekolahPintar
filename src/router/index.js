import Vue from 'vue'
import Router from 'vue-router'
import Pelajaran from '@/views/Pelajaran'
import Guru from '@/views/Guru'
import FormGuru from '@/views/form/FormGuru'
import FormPelajaran from '@/views/form/FormPelajaran'

Vue.use(Router)

export default new Router({
    routes : [
        {
            path: '/pelajaran',
            name: 'pelajaran',
            component: Pelajaran
        },
        {
            path: '/pelajaran/create',
            name: 'tambahpelajaran',
            component: FormPelajaran
        },
        {
            path: '/pelajaran/:id',
            name: 'editpelajaran',
            component: FormPelajaran
        },
        {
            path: '/guru',
            name: 'guru',
            component: Guru
        },
        {
            path: '/guru/create',
            name: 'tambahguru',
            component: FormGuru
        },
        {
            path: '/guru/:id',
            name: 'editguru',
            component: FormGuru
        }
    ]
})