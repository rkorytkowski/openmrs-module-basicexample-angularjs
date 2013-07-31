<%@ include file="/WEB-INF/template/include.jsp"%>
<%@ include file="/WEB-INF/template/header.jsp"%>

<%@ include file="template/localHeader.jsp"%>

<script data-main="${pageContext.request.contextPath}/moduleResources/basicexample/js/basicexample-main" src="${pageContext.request.contextPath}/moduleResources/basicexample/lib/require.js"></script>

<p>Hello ${user.systemId}!</p>

<div id="basicexampleapp" ng-view>Loading...</div>

<script>
    define('config', [], function() {
      return {
        resourceLocation: '${pageContext.request.contextPath}/moduleResources/basicexample',
        contextPath: '${pageContext.request.contextPath}'
      };
    });
</script>

<%@ include file="/WEB-INF/template/footer.jsp"%>