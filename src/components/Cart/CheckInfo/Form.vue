<script setup lang="ts">
import { ref } from 'vue';
import { Field, Form, ErrorMessage } from 'vee-validate';
import { useI18n } from 'vue-i18n';

import { useOrder } from '@/composables/useCart';

const { t } = useI18n();
const formItems: { [key: string]: string }[] = [
	{
		text: t('form.email'),
		rule: 'required|email',
		alias: 'email',
		as: 'input',
	},
	{
		text: t('form.name'),
		rule: 'required',
		alias: 'name',
		as: 'input',
	},
	{
		text: t('form.tel'),
		rule: 'required|numeric',
		alias: 'tel',
		as: 'input',
	},
	{
		text: t('form.address'),
		rule: 'required',
		alias: 'address',
		as: 'input',
	},
	{
		text: t('form.message'),
		alias: 'message',
		as: 'textarea',
	},
];

const { recipientInfo, setCheckInfoSubmitDisable } = useOrder();
</script>

<template>
	<Form
		v-slot="{ meta }"
		class="checkInfo_form"
	>
		<div
			v-for="item in formItems"
			:key="item.alias"
			class="form_group"
		>
			<label :for="item.alias">
				<span
					v-if="item.rule && item.rule.includes('required')"
					class="text-danger"
				>*</span>
				{{ item.text }}
			</label>
			<Field
				:name="item.alias"
				:placeholder="$t('form.pleaseFillIn') + item.text"
				:rules="item.rule"
				:label="item.text"
				v-slot="{ errors, field }"
				v-model="recipientInfo[item.alias]"
				@change="setCheckInfoSubmitDisable(meta.valid)"
			>
				<component
					v-bind="field"
					:is="item.as"
					:class="{ 'form-danger': errors.length }"
				/>
			</Field>
			<ErrorMessage
				:name="item.alias"
				as="div"
				class="form_errorMsg"
			/>
		</div>
	</Form>
</template>

<style lang="scss">
.checkInfo {
	&_form {
		display: block;
		padding-right: 30px;

		@include rwd(m) {
			padding: 20px 0 0;
			margin-top: 20px;
			border-top: 1px dashed #bbb;
		}

		input, textarea {
			width: 100%;
		}
	}
}
</style>
