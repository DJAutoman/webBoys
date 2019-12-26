function ValidateForm(validateFormOpt) {
  
  this._initValiFields = function() {
    this.fieldsOpt = validateFormOpt.fieldsOpt;
  };
  this._getIpts = function() {
  
    this.iptEle = {};
    for (let key in this.fieldsOpt) {
      this.iptEle[key] = document.querySelector(this.fieldsOpt[key].selector);
    }
  };

  this._initValiRes = function() {
    
    let valiResObj = {};
    for (let field in this.fieldsOpt) {
      valiResObj[field] = false;
    }
    Object.defineProperty(valiResObj, "pass", {
      get() {
        let res = true;
        for (let key in this) {
          res = res && this[key];
          if (!res) {
            break;
          }
        }
        return res;
      }
    });
    this.valiRes = valiResObj;
  };
  this.bindFieldEvent = function() {
    for (let field in this.fieldsOpt) {
      let curIpt = this.iptEle[field];
      let _this = this;
      curIpt.onblur = function() {
       
        let value = this.value;
        _this.valiRes[field] = _this._valiField(field, value);
      };
    }
  };

  
  this._valiField = function(field, value) {
    let valiRes = true;
    // console.log(`${field}`);
   
    let ruleObj = this.fieldsOpt[field].rule;
    for (let rule in ruleObj) {
      // console.log(`验证${field}的${rule}`);
      let ruleRes = eval(`this._vali_${rule}(ruleObj,value)`);
      if (!ruleRes) {
        valiRes = ruleRes;
        break;
      }
    }
    this._handleFieldRes(field, valiRes);
    return valiRes;
  };
  this._vali_reg = function(ruleObj, value) {
    return ruleObj.reg.test(value);
  };
  this._vali_value = function(ruleObj, value) {
    return value == ruleObj.value;
  };
  this._vali_equal = function(ruleObj, value) {
    let targetIpt = this.iptEle[ruleObj.equal];
    return targetIpt.value == value;
  };

  (this._handleFieldRes = function(field, valiRes) {
    console.log("结果");
    try {
      validateFormOpt.valiField(field, valiRes);
    } catch (e) {
      console.error(e);
    }
  }),
    (this._handleSubmit = function(validateFormOpt) {
      let submit = document.querySelector(validateFormOpt.submit.selector);
      let _this = this;
      submit.addEventListener("click", function(e) {
        if (!_this.isPass()) {
          validateFormOpt.error(e);
        } else {
          validateFormOpt.success(e);
        }
      });
    });

  this._focus = function(field) {
    this.iptEle[field].focus();
  };

  this.isPass = function() {
    return this.valiRes.pass;
  };

 
  this.validate = function() {
    this.bindFieldEvent();
    this._handleSubmit(validateFormOpt);
  };

  this._initValiFields();

  this._getIpts();

  this._initValiRes();
}

