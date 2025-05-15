import loadRepository from "../repositories/loadRepository";

const loadService = {
  loadData: async () => {
    const loadData = await loadRepository.loadData();
    return loadData;
  },
};

export default loadService;
