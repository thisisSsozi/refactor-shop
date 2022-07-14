<template>
    <div class="bodyna">
       <div>
        <HeaderSection/>
       </div>

       <div>
        <BodySection/>
       </div>

       <div>
        <FooterSection/>
       </div>
    </div>
</template>

<script>
import HeaderSection from './HeaderSection.vue'
import BodySection from './BodySection.vue'
import FooterSection from './FooterSection.vue'
export default {
    name:'HomePage',
    data(){},
    methods:{},
    components: {
        HeaderSection,
        BodySection,
        FooterSection
        }
}
</script>

<style></style>