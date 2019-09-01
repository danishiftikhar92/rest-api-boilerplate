module.exports = {
  makeResponse(res, successStatus, status, message, appVersion, result, platformStatus = 200) {
    res.set('Access-Control-Allow-Origin', '*');
    res.statusMessage = message;
    res.status(status).send({
      status: successStatus,
      code: platformStatus || status,
      message,
      appVersion,
      result: (result === null || result === 'null' || result === '') ? [] : result,
    });
  },
};
