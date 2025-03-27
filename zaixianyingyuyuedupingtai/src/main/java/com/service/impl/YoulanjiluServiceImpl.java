package com.service.impl;

import com.utils.StringUtil;
import com.service.DictionaryService;
import com.utils.ClazzDiff;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.lang.reflect.Field;
import java.util.*;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.transaction.annotation.Transactional;
import com.utils.PageUtils;
import com.utils.Query;
import org.springframework.web.context.ContextLoader;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import org.springframework.lang.Nullable;
import org.springframework.util.Assert;
import com.dao.YoulanjiluDao;
import com.entity.YoulanjiluEntity;
import com.service.YoulanjiluService;
import com.entity.view.YoulanjiluView;

/**
 * 游览记录 服务实现类
 */
@Service("youlanjiluService")
@Transactional
public class YoulanjiluServiceImpl extends ServiceImpl<YoulanjiluDao, YoulanjiluEntity> implements YoulanjiluService {

    @Override
    public PageUtils queryPage(Map<String,Object> params) {
        Page<YoulanjiluView> page =new Query<YoulanjiluView>(params).getPage();
        page.setRecords(baseMapper.selectListView(page,params));
        return new PageUtils(page);
    }

    @Override
    public void insertYoulanjilu(Integer userid,String youlanTablename,Integer youlanTableid,String youlanName,String youlanPhoto) {

    YoulanjiluEntity youlanjiluEntity = new YoulanjiluEntity();

    youlanjiluEntity.setCreateTime(new Date());
    youlanjiluEntity.setInsertTime(new Date());
    youlanjiluEntity.setYonghuId(userid);
    youlanjiluEntity.setYoulanTablename(youlanTablename);
    youlanjiluEntity.setYoulanTableid(youlanTableid);
    youlanjiluEntity.setYoulanName(youlanName);
    youlanjiluEntity.setYoulanPhoto(youlanPhoto);
    this.insert(youlanjiluEntity);
    }

}
