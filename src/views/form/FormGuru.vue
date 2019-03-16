<template>
    <div>
        <b-container class="bv-example-row bv-example-row-flex-cols">
            <b-row class="justify-content-md-center">
                <b-card>
                    <h2 slot="header">Data Guru</h2>
                    <b-form @submit.prevent="submitForm">
                        <b-form-group label="NIP:">
                            <b-form-input type="text" v-model="form.nip" required placeholder="Masukan NIP"/>
                        </b-form-group>
                        <b-form-group label="Nama Lengkap:">
                            <b-form-input type="text" v-model="form.nama_guru" required placeholder="Masukan Nama Lengkap"/>
                        </b-form-group>
                        <b-form-group label="Jenis Kelamin:">
                            <b-form-select :options="jenkel" required v-model="form.jenis_kelamin" />
                        </b-form-group>
                        <b-form-group label="Tanggal Lahir:">
                            <b-form-input type="date" v-model="form.tgl_lahir" required placeholder="Masukan Tanggal Lahir"/>
                        </b-form-group>
                        <b-button type="submit" variant="success"><font-awesome-icon icon="plus"/> Tambah</b-button>&nbsp;
                        <b-button type="reset" variant="primary"><font-awesome-icon icon="redo"></font-awesome-icon></b-button> 
                        
                    </b-form>
                </b-card>
            </b-row>
        </b-container>
    </div>
</template>
<script>
import { api } from '@/helper/api'

export default {
    name: 'tambahguru',
    data () {
        return {
            form: {
                id: null,
                nip: '',
                nama_guru: '',
                jenis_kelamin: null,
                tgl_lahir: ''
            },
            jenkel: [{ text: 'Masukan Jenis Kelamin', value: null }, 'Laki-laki', 'Perempuan'],
        }
    },
    mounted () {
        let id = this.$route.params.id
        if(id){
            api.get('/guru/' + id).then(res => {
                this.form = res.data.result
            })
        }
    },
    methods: {
        submitForm () {
            let data = this.form
            let url = 'guru'

            if(this.form.id){
                url += '/' + this.form.id
            }

            api.post(url, data).then(res => {
                if(res.data.status === 'success'){
                    this.$router.push('/guru')
                } else {
                    console.log(res.data.message)
                }
            }).catch(err => {
                console.log(err)
            })
        }
    }
}
</script>

