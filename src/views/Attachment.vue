<template>
  <div class="attachment">
  	<div style="padding-bottom:50px;"></div>
  	<div class="row">
  		<!-- Right -->
  		<div class="col-md-6">
		  	<!-- Alert -->
		  	<div
		  		:style="`display:${displayStyle}`"
		  		:class="`customAlert alert alert-${alertClass}`">
					 {{ message }}
		  	</div>
		  	<!-- ./Alert -->
  		</div>
  		<!-- ./Right -->
  		<!-- Left -->
  		<div class="col-md-6">
  			<!-- Dropzone Area -->
  			<dropzone
  				id="el"
  				class="col-md-12 col-lg-12 dropzoneArea"
  				ref="el"
  				:options="options"
  				v-on:vdropzone-sending="uploadEvent"
  				:destroyDropzone="true">
  				{{ textDragDropArea }}
  			</dropzone>
  			<!-- ./Dropzone Area -->
  		</div>
  		<!-- ./Left -->
  	</div>
  </div>
</template>

<script>
	import Dropzone from 'nuxt-dropzone'
	export default {
		data() {
			return {
				textDragDropArea : "Drop file here or click to upload.",
				options : {
					url: "http://localhost"
				},
				displayStyle : 'none',
				alertClass : '',
				message : ''
			}
		},
	  name: 'attachment',
	  components: {
	  	Dropzone
	  },
	  methods : {
	  	uploadEvent(file,xhr,formData) {

	  		let fileSize = this.$store.dispatch('fileUpload/checkFileSize',file),
	  				sizeIs = this.$store.state.fileUpload.sizeIs,
	  				maxSize = this.$store.state.fileUpload.maxSize

	  		this.displayStyle = 'block'

	  		if(sizeIs <= maxSize) {
	  			this.alertClass = 'success'
	  			this.message = 'File is less than ' + maxSize + ' Kb'
	  		} else {
	  			this.alertClass = 'danger'
	  			this.message = 'File exceeds' + maxSize + ' Kb'
	  		}
	  	},
	  	removedFile(file,xhr,formData) {
	  	}
	  },
	  mounted() {
	  	const instance = this.$refs.el.dropzone
	  }
	};
</script>

<style type="text/css">
	.dropzoneArea {
		margin:auto;
		width: 95%;
		border:5px dotted #ccc;
		padding:50px 50px 50px 50px;
		cursor: pointer;
	}
	.customAlert {
		width: 95%;
		margin:auto;
	}
</style>