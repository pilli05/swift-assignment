import loadService from "../services/loadService";

const loadController = {
  loadData: async (req: any, res: any) => {
    try {
      const loadData = await loadService.loadData();
      res.status(200).send({
        message: "Load data fetched successfully",
        data: loadData,
      });
    } catch (error) {
      res.status(500).send({
        message: `Internal server error`,
        error: error,
      });
    }
  },
};

export default loadController;
