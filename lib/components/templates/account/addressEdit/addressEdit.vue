<template>
  <section class="account-address-edit">
    <vf-m-card class="mb-0" no-body>
      <vf-m-card-body class="md:px-5 py-5">
        <vf-o-address-edit-form :address="address" :countries="countries" :zones="zones" />
      </vf-m-card-body>
    </vf-m-card>
  </section>
</template>
<script>
import { validationMixin } from "vuelidate";
import required from "vuelidate/lib/validators/required";
import minLength from "vuelidate/lib/validators/minLength";
import maxLength from "vuelidate/lib/validators/maxLength";
import { mapGetters } from "vuex";
export default {
  props: ["address", "countries", "zones"],
  data() {
    return {
      form: {
        firstName: this.address.firstName,
        lastName: this.address.lastName,
        company: this.address.company,
        address1: this.address.address1,
        address2: this.address.address2,
        city: this.address.city,
        countryId: this.address.countryId,
        zoneId: this.address.zoneId,
        zipcode: this.address.zipcode
      }
    };
  },
  mixins: [validationMixin],
  validations() {
    let fields = {};

    if (this.zones.content.length > 0) {
      fields = {
        ...fields,
        zoneId: {
          required
        }
      };
    }

    return {
      form: {
        firstName: {
          required,
          minLength: minLength(1),
          maxLength: maxLength(32)
        },
        lastName: {
          required,
          minLength: minLength(1),
          maxLength: maxLength(32)
        },
        company: {
          minLength: minLength(1),
          maxLength: maxLength(32)
        },
        address1: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(128)
        },
        address2: {
          minLength: minLength(3),
          maxLength: maxLength(128)
        },
        city: {
          required,
          minLength: minLength(2),
          maxLength: maxLength(128)
        },
        countryId: {
          required
        },
        zipcode: {
          required,
          minLength: minLength(2),
          maxLength: maxLength(10)
        },
        ...fields
      }
    };
  },
  computed: {
    ...mapGetters({
      error: "vuefront/error"
    })
  },
  methods: {
    async handleChangeCountry(value) {
      await this.$store.dispatch("common/zone/list", {
        page: 1,
        size: -1,
        country_id: value
      });
      this.form.zoneId = "";
    },
    async onSubmit() {
      this.$v.$touch();

      if (!this.$v.form.$invalid) {
        await this.$store.dispatch("common/address/edit", {
          id: this.address.id,
          address: {
            firstName: this.form.firstName,
            lastName: this.form.lastName,
            company: this.form.company,
            address1: this.form.address1,
            address2: this.form.address2,
            countryId: this.form.countryId,
            zoneId: this.form.zoneId,
            city: this.form.city,
            zipcode: this.form.zipcode
          }
        });

        if (!this.error) {
          this.$router.push("/account/address");
        }
      }
    }
  }
};
</script>
