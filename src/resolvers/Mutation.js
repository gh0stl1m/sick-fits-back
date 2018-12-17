const mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO check if there are logged in
    const item = await ctx.db.mutation.createItem({ data: { ...args } });
    return item;
  }
};

module.exports = mutations;
