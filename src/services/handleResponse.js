const getVendorsList = async (page, pageSize, lat, long) => {
  try {
    const response = await fetch(
      `https://snappfood.ir/mobile/v3/restaurant/vendors-list?page=${page}&page_size=${pageSize}&lat=${lat}&long=${long}`
    );
    const data = await response.json();
    console.log(1, data);
    return data;
  } catch (error) {
    console.error(
      `There has been a problem with your fetch operation: ${error.message}`
    );
  }
};

export { getVendorsList };
