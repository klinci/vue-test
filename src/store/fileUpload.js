const state = {
	files : [],
	maxSize : 5000,
	sizeIs : 0
}

const actions = {
	checkFileSize : ({ commit, state }, param) => {
		var calculation = param.size / 1000
		commit('fileSizeIs', Math.ceil(calculation))
	},
}

const mutations = {
	fileSizeIs(state, size) {
		state.sizeIs = size;
	}
}

export default {
	namespaced: true,
	state,
	actions,
	mutations
};