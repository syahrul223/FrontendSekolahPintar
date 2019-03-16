<template>
    <div>
        <b-container class="bv-example-row bv-example-row-flex-cols">
            <b-row class="justify-content-md-center">
                <b-card>
                    <h2 slot="header">Mata Pelajaran</h2>
                    <b-form @submit.prevent="submitForm">
                        <b-form-group label="Nama Mata Pelajaran:">
                            <b-form-input type="text" v-model="form.nama_matpel" required placeholder="Masukan Nama Mata Pelajaran"/>
                        </b-form-group>
                        <b-form-group label="Kode Keahlian:">
                            <b-form-input type="text" v-model="form.kd_keahlian" required placeholder="Masukan Kode Keahlian"/>
                        </b-form-group>
                        <b-form-group label="Deskripsi:">
                            <b-form-input type="text" v-model="form.keahlian" required placeholder="Masukan Keteranganya"/>
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
    name: 'tambahpelajaran',
    data () {
        return {
            form: {
                id: null,
                nama_matpel: '',
                kd_keahlian: '',
                keahlian: ''
            }
        }
    },
    mounted () {
        let id = this.$route.params.id
        if(id) {
            api.get('/pelajaran/' + id).then(res => {
                this.form = res.data.result
            })
        }
    },
    methods: {
        submitForm () {
            let data = this.form
            let url = 'pelajaran'

            if(this.form.id) {
                url += '/' + this.form.id
            }

            api.post(url, data).then(res => {
                if(res.data.status === 'success'){
                    this.$router.push('/pelajaran')
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

