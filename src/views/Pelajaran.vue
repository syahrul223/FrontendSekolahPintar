<template>
    <div>
        <b-container class="bv-example-row bv-example-row-flex-cols">
            <b-row class="justify-content-md-center">
                <h2>Data Mata Pelajaran</h2>            
            </b-row>
            <br>
            <b-row align-v="center" class="justify-content-md-center">
                <b-card>
                    <div class="table-responsive">
                        <table class="table table-hover">
                            <tr>
                                <th>No</th>
                                <th>Pelajaran</th>
                                <th>Kode Keahlian</th>
                                <th>Deskripsi</th>
                                <th colspan="2">Action</th>
                            </tr>
                            <tr v-for="(pelajaran, i) in data_matpel" :key="i">
                                <td>{{ i + 1 }}</td>
                                <td>{{ pelajaran.nama_matpel }}</td>
                                <td>{{ pelajaran.kd_keahlian }}</td>
                                <td>{{ pelajaran.keahlian }}</td>
                                <td>
                                    <router-link :to="'/pelajaran/' + pelajaran.id">
                                        <b-button variant="warning" v-b-tooltip.hover title="Ubah Data">
                                            <font-awesome-icon icon="edit"></font-awesome-icon>
                                        </b-button>
                                    </router-link>
                                </td>
                                <td>
                                    <b-button @click="hapus(pelajaran.id)" variant="danger" v-b-tooltip.hover title="Hapus">
                                        <font-awesome-icon icon="trash"></font-awesome-icon>
                                    </b-button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </b-card>
                <br>
            </b-row>
            <hr>
            <b-row class="justify-content-md-center">
                <router-link to="/pelajaran/create">
                    <b-button variant="success" v-b-tooltip.hover title="Tambah Mata Pelajaran">
                        <font-awesome-icon icon="plus-circle"></font-awesome-icon>
                    </b-button>
                </router-link>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import { api } from '@/helper/api'

export default {
    name: 'pelajaran',
    data () {
        return {
            data_matpel: []
        }
    },
    mounted () {
        this.get()
    },
    methods: {
        get() {
            api.get('pelajaran').then(res => {
                if(res.data.status === 'success'){
                    this.data_matpel = res.data.result
                } else {
                    console.log(res.data.message)
                }
            }).catch(err => {
                console.log(err)
            })
        },
        hapus(id){
            api.delete('pelajaran/' + id).then(res => {
                if(res.data.status === 'success'){
                    this.get()
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

