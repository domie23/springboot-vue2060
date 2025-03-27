package com.service;

import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.YoulanjiluEntity;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import org.springframework.lang.Nullable;
import java.util.List;

/**
 * 游览记录 服务类
 */
public interface YoulanjiluService extends IService<YoulanjiluEntity> {

    /**
    * @param params 查询参数
    * @return 带分页的查询出来的数据
    */
     PageUtils queryPage(Map<String, Object> params);

    /**
    * 新增游览记录
    * @param userid 操作人所在表
    * @param youlanTablename 游览的表的表明
    * @param youlanTableid 游览的表的id
    * @param youlanName 游览数据的name
    * @param youlanPhoto 游览数据的photo
    * @return
    */
    void insertYoulanjilu(Integer userid,String youlanTablename,Integer youlanTableid,String youlanName,String youlanPhoto);

}